# schema-definitions

A repository containing schema definitions that can be shared across multiple schemas.

Each definition along with its handlebars partial and tests is stored in its own folder.

## Company definition

The company definition is used by the EN10168 schema under the `CommercialTransaction` property at `A01`, `A06`, `A06.1`, `A06.2`, and `A06.3` It is also used in the CoA schema under the `Parties` property at `Manufacturer`, `Customer` and `Receiver`.
For more information, please look at the CoA [documentation](https://github.com/thematerials-network/CoA-documentation/blob/main/README.md) or EN10168 [documentation](https://s1seven.github.io/SEP/EN10168/#json-definitions).

| Attribute             | Description                                                                                                                                                                                                                                            | Mandatory | Visible |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------: | :-----: |
| Name                  | The name of the company in CoA                                                                                                                                                                                                                         |    Yes    |   Yes   |
| CompanyName           | The name of the company in EN10168                                                                                                                                                                                                                     |    Yes    |   Yes   |
| Street                | The address in EN10168                                                                                                                                                                                                                                 |    Yes    |   Yes   |
| AddressLine1          | The first address line in CoA                                                                                                                                                                                                                          |    Yes    |   Yes   |
| AddressLine2          | A second address line                                                                                                                                                                                                                                  |    No     |   Yes   |
| ZipCode               | The ZIP code                                                                                                                                                                                                                                           |    Yes    |   Yes   |
| City                  | The city                                                                                                                                                                                                                                               |    Yes    |   Yes   |
| Country               | The two-letter ISO country code according to https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.                                                                                                                                                         |    Yes    |   Yes   |
| Email                 | The email address to be used to send certificates to the company.                                                                                                                                                                                      |    No     |   Yes   |
| Identifier            | One or more unique company identifiers. Currently, [VAT](https://ec.europa.eu/taxation_customs/vat-identification-numbers_en), [DUNS](https://www.dnb.com/duns-number.html), and [Cage Codes](https://cage.dla.mil/Info/about#cagecode) are supported. |    Yes    |   No    |
| AdditionalInformation | An array of additional free text information on the company.                                                                                                                                                                                           |    No     |   Yes   |

## CertificateLanguages definition

The languages definition is used in all schemas, including `EN10168` and `CoA`.

| Attribute            | Description                                                           | Mandatory | Visible |
| -------------------- | --------------------------------------------------------------------- | :-------: | :-----: |
| CertificateLanguages | An array of the languages you wish your certificate to be rendered in |    Yes    |   No    |

## Measurement definition

The Measurement defintion is used by the EN10168 schema under the `ProductDescription` property at `B10`, `B11`, `B12`, and `B13`.

| Attribute | Description                                                                | Mandatory | Visible |
| --------- | -------------------------------------------------------------------------- | :-------: | :-----: |
| Property  | The property measured                                                      |    No     |   No    |
| Value     | A measured or calculated Value (e.g. mean of individual measurements).     |    Yes    |   Yes   |
| Minimum   | "The lower limit according product specification. If not provided it is 0. |    No     |   Yes   |
| Maximum   | The upper limit according product specification. If not provided it is ∞.  |    No     |   Yes   |
| Unit      | The Unit of Value.                                                         |    No     |   Yes   |

## Adding a schema definition

To add a new schema definition, you can use the `create:definition` command. Run `npm run create:definition -- --name <definition name> --hbs <boolean>`. This will create a folder with the name of the schema and add all the starter files mentioned below along with the boilerplate code.

Each schema definition goes in its own folder. Each folder should contain a schema with the same name as the folder, e.g. `company.json` goes in the `company` folder, `languages.json` goes in the `languages` folder. If a handlebars partial is needed, it should share the same name as the main schema file and folder, e.g. `company.hbs` goes in the `company` folder.

There should also be a `test_schema.json` in each folder which references the main schema file in that folder which will be used for testing.

Each folder should have a `test` folder with a `test_suites_map.js` file and a `fixtures` folder within. The `test_suites_map.js` file should contain a map of the valid and invalid certificates contained within the `fixtures` folder for testing, as well as the errors expected for the invalid certificates.

When a new folder is created and tests are added, the folder name must be added to the `folders` array in `validate.spec.js`.
