# ARC

| Name                     | Size (per element) | Description                                                                        |
|--------------------------|--------------------|------------------------------------------------------------------------------------|
| [File Entries](#entries) | variable           | an index of all files within the ARC, contains size, offset location, and filename |
| File Contents            | variable           | all files' data within the ARC                                                     |

## Entries

| Name  | Size (per element) | Description                    |
|-------|--------------------|--------------------------------|
| Count | (int32)0x4         | Amount of entries in the index |

(repeated per count)
| Name          | Size (per element) | Description                                                                                                  |
|---------------|--------------------|--------------------------------------------------------------------------------------------------------------|
| File Name     | variable           | a string(int16 indicates length, then Little endian Unicode string of specified length) indicating file name |
| File position | (int32)0x4         | indicates offset of a file within the ARC                                                                    |
| File Size     | (int32)0x4         | indicates size in bytes of a file                                                                            |

Each file from the entries can be read directly, due to the all neccesary information about the file being within the entry itself.
