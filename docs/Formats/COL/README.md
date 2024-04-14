# COL

| Name | Size (per element) | Description |
| :-:|:-:|:-:|
| COL Version | (int32)0x4 | indicates Format version|
| [Colors](#standard-colors) | variable | a list of all colors within the Color Table|
| [Water Colors](#water-colors) | variable | a list of all water colors within the Color Table (only if Version > 0)|

## Standard Colors

| Name | Size (per element) | Description |
| :-:|:-:|:-:|
| Count | (int32)0x4 | Amount of Colors in the table|

(repeated per count)
| Name | Size (per element) | Description |
| :-:|:-:|:-:|
| Name | variable | a string(int16 indicates length, then Little endian Unicode string of specified length) indicating color name|
| Color | [(ARGB)](#argb)0x4 | an ARGB value, indicating color and transparency|

## Water Colors

| Name | Size (per element) | Description |
| :-:|:-:|:-:|
| Count | (int32)0x4 | Amount of Colors in the table|

(repeated per count)
| Name | Size (per element) | Description |
| :-:|:-:|:-:|
| Name | variable | a string(int16 indicates length, then Little endian Unicode string of specified length) indicating color name|
| Surface Color | [(ARGB)](#argb)0x4 | an ARGB value, indicating color and transparency|
| Underwater Color | [(ARGB)](#argb)0x4 | an ARGB value, indicating color and transparency|
| Fog Color | [(ARGB)](#argb)0x4 | an ARGB value, indicating color and transparency|

## ARGB

| Name | Size (per element) | Description |
| :-:|:-:|:-:|
| Alpha | (int8)0x1 | Alpha color channel|
| Red | (int8)0x1 | Red color channel|
| Green | (int8)0x1 | Green color channel|
| Blue | (int8)0x1 | Blue color channel|
