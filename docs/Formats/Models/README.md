# Models

| Name             | Size (per element) | Description                         |
|------------------|--------------------|-------------------------------------|
| version          | (int32)0x4         | indicates format version            |
| Model Count      | (int32)0x4         | how many models are within the file |
| [Models](#model) | variable           | all models within the model file    |

* all known Model/Material information is the direct product of [May/MattNL](https://github.com/MattN-L)'s work!

## Model

(repeated per model count)

| Name               | Size (per element) | Description                                                                                  |
|--------------------|--------------------|----------------------------------------------------------------------------------------------|
| Model Name         | variable           | a string(int16 indicates length, then utf8 string of specified length) indicating model name |
| Texture dimensions | (2x int32)0x8      | indicates dimensions of texture file, in X Y format                                          |
| Part Count         | (int32)0x4         | how many parts are within the model                                                          |
| [Parts](#part)     | variable           | all parts within the model                                                                   |

## Part

| Name             | Size (per element) | Description                                                                                                                    |
|------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Part Name        | variable           | a string(int16 indicates length, then utf8 string of specified length) indicating part name                                    |
| Parent Name      | variable           | a string(int16 indicates length, then utf8 string of specified length) indicating part parent name(only if Format version > 1) |
| Translation X    | (float)0x4         | indicates part translation in the X dimension                                                                                  |
| Translation Y    | (float)0x4         | indicates part translation in the Y dimension                                                                                  |
| Translation Z    | (float)0x4         | indicates part translation in the Z dimension                                                                                  |
| Unknown          | (float)0x4         | it is unclear what this space is used to signify                                                                               |
| Texture Offset X | (float)0x4         | indicates offset in the texture, in the X dimension                                                                            |
| Texture Offset Y | (float)0x4         | indicates offset in the texture, in the Y dimension                                                                            |
| Rotation X       | (float)0x4         | indicates part rotation in the X dimension                                                                                     |
| Rotation Y       | (float)0x4         | indicates part rotation in the Y dimension                                                                                     |
| Rotation Z       | (float)0x4         | indicates part rotation in the Z dimension                                                                                     |
| Box Count        | (int32)0x4         | how many boxes are within the part                                                                                             |
| [Boxes](#box)    | variable           | all boxes within the part                                                                                                      |

## Box

| Name             | Size (per element) | Description                                               |
|------------------|--------------------|-----------------------------------------------------------|
| Position X       | (float)0x4         | indicates box position in the X dimension                 |
| Position Y       | (float)0x4         | indicates box position in the Y dimension                 |
| Position Z       | (float)0x4         | indicates box position in the Z dimension                 |
| Length           | (int32)0x4         | length of the box                                         |
| Height           | (int32)0x4         | height of the box                                         |
| Width            | (int32)0x4         | width of the box                                          |
| Uv X             | (float)0x4         | indicates Uv of the box on the texture in the X dimension |
| Uv Y             | (float)0x4         | indicates Uv of the box on the texture in the Y dimension |
| Scale(inflation) | (float)0x4         | indicates scale of the box                                |
| Mirror Texture   | (bool)0x1          | indicates whether or not to mirror the texture on the box |
