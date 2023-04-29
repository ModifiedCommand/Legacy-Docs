# Material

| Name                   | Size (per element) | Description                                  |
|------------------------|--------------------|----------------------------------------------|
| version                | (int32)0x4         | indicates format version                     |
| Material Count         | (int32)0x4         | Number of materials declared within the file |
| [Materials](#material) | variable           | materials within the file                    |

## Materials

| Name | Size (per element) | Description   |
|------|--------------------|---------------|
| name | (string)variable   | material name |
| type | (string)variable   | material type |

(repeat per Material Count)

**Each 'string' is an Int16 to indicate length, followed by an ASCII encoded string.
