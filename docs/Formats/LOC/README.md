# LOC

| Name                               | Size (per element) | Description                               |
|------------------------------------|--------------------|-------------------------------------------|
| version                            | (int32)0x4         | indicates format version                  |
| Language Count                     | (int32)0x4         | how many languages are within the file    |
| [Keys](#keys)                      | variable           | Keys for languages(only if version == 2)  |
| [Language index](#languages-index) | variable           | index of all languages within the file    |
| [Language List](#language)         | variable           | All languages and strings within the file |

## Languages Index

| Name            | Size (per element) | Description                                                                     |
|-----------------|--------------------|---------------------------------------------------------------------------------|
| Language        | (String)variable   | index of all languages within the file                                          |
| Unknown Integer | (int32)0x4         | it is unknown what this does, but there is a 4 byte space after every language. |

(repeat per Language Count)

## Language

| Name               | Size (per element) | Description                                                           |
|--------------------|--------------------|-----------------------------------------------------------------------|
| ReadByte           | (int32)0x4         | indicates weather or not to read a single byte following this element |
| unknown byte       | (byte)0x1          | to only be read if the previous integer is greater than 0             |
| Language           | (string)variable   | Language to be used(should be located within languages index)         |
| String Count       | (int32)0x4         | number of strings within the language                                 |
| [Strings](#string) | variable           | Strings within the language                                           |

(repeat per Language Count)

## String

| Name  | Size (per element) | Description                                                                                                                                         |
|-------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Key   | variable           | will attempt to either look up key based on previous list, based on current position within strings, or read a new string from the file as the key. |
| Value | (string)variable   | string entry contents                                                                                                                               |

(repeat per String Count)

## Keys

| Name                    | Size (per element)    | Description                                                                    |
|-------------------------|-----------------------|--------------------------------------------------------------------------------|
| Use Unique IDs          | (bool)0x1             | indicates if unique IDs will be used per-string                                |
| Key Count               | (int32)0x4            | how many Keys to be read                                                       |
| Key(*repeats per count) | (Hex ID)0x4 // string | unique key for strings, may either be a 4 byte hexadecimal ID or String itself |
