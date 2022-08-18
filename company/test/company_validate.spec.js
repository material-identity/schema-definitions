const { loadExternalFile } = require("@s1seven/schema-tools-utils");
const { validCertTestSuitesMap, invalidCertTestSuitesMap } = require("./test_suites_map");
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const createAjvInstance = () => {
	const ajv = new Ajv({
		loadSchema: (uri) => loadExternalFile(resolve(__dirname, `../${uri}`), "json"),
		strictSchema: true,
		strictNumbers: true,
		strictRequired: true,
		strictTypes: true,
		allErrors: true,
	});
	ajv.addKeyword("meta:license");
	addFormats(ajv);
	return ajv;
};

describe("Validate", function () {
	const schemaPath = resolve(__dirname, "../test_schema.json");
	const companySchemaPath = resolve(__dirname, "../company.json");
	const localSchema = JSON.parse(readFileSync(schemaPath, "utf-8"));
	const companySchema = JSON.parse(readFileSync(companySchemaPath, "utf-8"));

	it("should validate schema", () => {
		const validateSchema = createAjvInstance().addSchema(companySchema).compile(localSchema);
		expect(() => validateSchema()).not.toThrow();
	});

	validCertTestSuitesMap.forEach(({ certificateName }) => {
		it(`${certificateName} should be a valid certificate`, async () => {
			const certificatePath = resolve(__dirname, `./fixtures/${certificateName}.json`);
			const certificate = JSON.parse(readFileSync(certificatePath, "utf8"));
			const validator = await createAjvInstance().compileAsync(localSchema);
			//
			const isValid = await validator(certificate);
			expect(isValid).toBe(true);
			expect(validator.errors).toBeNull();
		});
	});

	invalidCertTestSuitesMap.forEach(({ certificateName, expectedErrors }) => {
		it(`${certificateName} should be an invalid certificate`, async () => {
			const certificatePath = resolve(__dirname, `./fixtures/${certificateName}.json`);
			const certificate = JSON.parse(readFileSync(certificatePath, "utf8"));
			const validator = await createAjvInstance().compileAsync(localSchema);
			//
			const isValid = await validator(certificate);
			expect(isValid).toBe(false);
			expect(validator.errors).toEqual(expectedErrors);
		});
	});
});
