# Schema definitions

A repository containing schema definitions that can be shared across multiple schemas.

Each definition is stored in its own folder along with its handlebars partial and tests/fixtures.

## Company definition

The company definition is used by the EN10168 schema under the `CommercialTransaction` property at `A01`, `A06`, `A06.1`, `A06.2`, and `A06.3` It is also used in the CoA schema under the `Parties` property at `Manufacturer`, `Customer` and `Receiver`.
For more information, please look at the CoA [documentation](https://github.com/thematerials-network/CoA-documentation/blob/main/README.md) or EN10168 [documentation](https://s1seven.github.io/SEP/EN10168/#json-definitions).

| Attribute             | Description                                                                                                                                                                                                                                            | Mandatory | Visible |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------: | :-----: |
| Name                  | The name of the company in CoA                                                                                                                                                                                                                         |    Yes    |   Yes   |
| CompanyName           | The name of the company in EN10168                                                                                                                                                                                                                     |    Yes    |   Yes   |
| Street                | The address can be a string or an array of between 1 and 3 strings                                                                                                                                                                                     |    Yes    |   Yes   |
| ZipCode               | The ZIP code                                                                                                                                                                                                                                           |    Yes    |   Yes   |
| City                  | The city                                                                                                                                                                                                                                               |    Yes    |   Yes   |
| Country               | The two-letter ISO country code according to https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.                                                                                                                                                         |    Yes    |   Yes   |
| Email                 | The email address to be used to send certificates to the company.                                                                                                                                                                                      |    No     |   Yes   |
| Identifier            | One or more unique company identifiers. Currently, [VAT](https://ec.europa.eu/taxation_customs/vat-identification-numbers_en), [DUNS](https://www.dnb.com/duns-number.html), and [Cage Codes](https://cage.dla.mil/Info/about#cagecode) are supported. |    Yes    |   No    |
| AdditionalInformation | An array of additional free text information on the company.                                                                                                                                                                                           |    No     |   Yes   |

## Certificate Languages definition

The languages definition is used in all schemas, including `EN10168` and `CoA`.

| Attribute            | Description                                                           | Mandatory | Visible |
| -------------------- | --------------------------------------------------------------------- | :-------: | :-----: |
| CertificateLanguages | An array of the languages you wish your certificate to be rendered in |    Yes    |   No    |

## Measurement definition

The Measurement definition is used by the EN10168 schema under the `ProductDescription` property at `B10`, `B11`, `B12`, and `B13`.

| Attribute | Description                                                               | Mandatory | Visible |
| --------- | ------------------------------------------------------------------------- | :-------: | :-----: |
| Property  | The property measured                                                     |    No     |   Yes   |
| Value     | A measured or calculated Value (e.g. mean of individual measurements).    |    Yes    |   Yes   |
| Minimum   | The lower limit according product specification. If not provided it is 0. |    No     |   Yes   |
| Maximum   | The upper limit according product specification. If not provided it is ∞. |    No     |   Yes   |
| Unit      | The Unit of Value.                                                        |    No     |   Yes   |

## Product description definition

The ProductDescription definition is used by the EN10168 schema. It is a required property under `Certificate`. The table below shows how its used in the EN10168 schema. A modified version is used in the TKR schema.

| Attribute                | Description                                                          | Mandatory | Visible |
| ------------------------ | -------------------------------------------------------------------- | :-------: | :-----: |
| B01                      | The product                                                          |    Yes    |   Yes   |
| B02                      | An object containing multiple properties (see EN10168 documentation) |    Yes    |   Yes   |
| B03                      | Any supplementary requirements                                       |    No     |   Yes   |
| B04                      | The delivery conditions for the product                              |    No     |   Yes   |
| B05                      | Reference heat treatment of samples                                  |    No     |   Yes   |
| B06                      | Marking of the product                                               |    No     |   Yes   |
| B07                      | Identification of the product, usually batch, charge or lot number   |    Yes    |   Yes   |
| B08                      | Number of pieces of the product.                                     |    Yes    |   Yes   |
| B09                      | Product type and its describing dimensional parameters               |    Yes    |   Yes   |
| B10                      | Product dimensions - length of the produc                            |    Yes    |   Yes   |
| B11                      | Product dimensions                                                   |    No     |   Yes   |
| B12                      | Theoretical mass                                                     |    No     |   Yes   |
| B13                      | Actual mass                                                          |    Yes    |   Yes   |
| SupplementaryInformation | Supplementary information                                            |    No     |   Yes   |

## Validation definition

The Validation definition is used by the EN10168 schema. It is a required property under `Certificate`.

| Attribute                | Description                            | Mandatory | Visible |
| ------------------------ | -------------------------------------- | :-------: | :-----: |
| Z01                      | Statement of compliance                |    Yes    |   Yes   |
| Z02                      | Date of issue and validation           |    Yes    |   Yes   |
| Z03                      | Stamp of the inspection representative |    No     |   Yes   |
| Z04                      | CE marking                             |    No     |   Yes   |
| SupplementaryInformation | Validation Supplementary Information   |    No     |   Yes   |

## Key Value Object definition

The Key Value Object definition is used by the EN10168 schema under multiple properties.

| Attribute      | Description        | Mandatory | Visible |
| -------------- | ------------------ | :-------: | :-----: |
| Key            | The key            |    Yes    |   Yes   |
| Value          | The value          |    No     |   Yes   |
| Unit           | The unit           |    No     |   Yes   |
| Interpretation | The interpretation |    No     |   Yes   |
| Type           | The type (an enum) |    No     |   No    |

## Commercial Transaction definition

The Commercial Transaction definition is a required property used by the EN10168 schema.

| Attribute                | Description                                                                | Mandatory | Visible |
| ------------------------ | -------------------------------------------------------------------------- | :-------: | :-----: |
| A01                      | A Company object                                                           |    Yes    |   Yes   |
| A02                      | The type of inspection document, e.g. 'EN 10204 3.1 Certificate'           |    Yes    |   Yes   |
| A03                      | The document number of the certifcate                                      |    Yes    |   Yes   |
| A04                      | The mark of the manufacturer as base64 png file. The maximum size is <TBD> |    Yes    |   Yes   |
| A05                      | The originator of the document, not necessarily equal to A01               |    Yes    |   Yes   |
| A07                      | Purchase number                                                            |    Yes    |   Yes   |
| A08                      | Manufacturer's work number                                                 |    No     |   Yes   |
| A09                      | The article number used by the purchaser                                   |    No     |   Yes   |
| A97                      | A custom field for the position number in the order                        |    No     |   Yes   |
| A98                      | "A custom field for the delivery note number                               |    No     |   Yes   |
| A99                      | A custom field for the aviso document number                               |    No     |   Yes   |
| SupplementaryInformation | Commercial Transaction Supplementary Information                           |    No     |   Yes   |
| A06                      | The purchaser of the product and receiver of the certificate               |    Yes    |   Yes   |
| A06.1                    | The purchaser of the product                                               |    Yes    |   Yes   |
| A06.2                    | The consignee of the product                                               |    No     |   Yes   |
| A06.3                    | The receiver/consignee of the certificate                                  |    No     |   Yes   |

## Attachment definition

The Attachment definition is an optional property used by the CoA and EN10168 schemas.

| Attribute | Description                                    | Mandatory | Visible |
| --------- | ---------------------------------------------- | :-------: | :-----: |
| Hash      | The hash of unencoded data file.               |    Yes    |   No    |
| FileName  | The name of the file.                          |    Yes    |   Yes   |
| MIME-Type | The MIME/Type of the data file.                |    Yes    |   No    |
| Encoding  | The format in which the hash value is encoded. |    Yes    |   No    |
| Data      | The data encoded as defined in `Encoding`      |    Yes    |   No    |

## Chemical Element definition

The Chemical Element definition is used by the EN10168 schema as a property in ChemicalComposition.

| Attribute | Description                                          | Mandatory | Visible |
| --------- | ---------------------------------------------------- | :-------: | :-----: |
| Symbol    | The symbol of the element                            |    Yes    |   Yes   |
| Actual    | The measured part of the element as absolute number. |    Yes    |   Yes   |
| Minimum   | The minimum if defined by the product specification  |    No     |   Yes   |
| Maximum   | The maxium as defined by the product specification   |    No     |   Yes   |

## Adding a schema definition

To add a new schema definition, you can use the `create:definition` command. Run `npm run create:definition -- --name <definition name> --hbs <boolean>`. This will create a folder with the name of the schema and add all the starter files mentioned below along with the boilerplate code.

Each schema definition goes in its own folder. Each folder should contain a schema with the same name as the folder, e.g. `company.json` goes in the `company` folder, `languages.json` goes in the `languages` folder. If a handlebars partial is needed, it should share the same name as the main schema file and folder, e.g. `company.hbs` goes in the `company` folder.

There should also be a `test-schema.json` in each folder which references the main schema file in that folder which will be used for testing.

Each folder should have a `test` folder with a `test-suites-map.js` file and a `fixtures` folder within. The `test-suites-map.js` file should contain a map of the valid and invalid certificates contained within the `fixtures` folder for testing, as well as the errors expected for the invalid certificates.

When a new folder is created and tests are added, the folder name must be added to the `folders` array in `validate.spec.js`.

# Creating a new release

Once a PR has been approved and merged to main, the `Set $refs to remote on merge and update $ids` github action will run the `update:version` script and update the `$ref`s and `$id`s to the remote url. A new release should be made using the `npm run release` script. Once the release is done, the `schemas-deploy` tool should automatically receive the webhook from the release and deploy the updated schemas.

# $refs and $ids and working locally

When merging to main, `update:version` is run automatically by the `ci` workflow and the `$ref`s and `$id`s are updated to remote URLs. When working locally, run `npm run set-local-paths` to set all `$ref`s and `$id`s to local values. This script is run automatically using a pre-commit hook whenever a commit is made.
