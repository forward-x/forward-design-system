# Input.Crypto

## Props

| Name           | Description                                                                                                                              | Type                          | Default | Required? |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|:-------:|-----------|
| size           | Size of Input<br>- 'L': 40px (desktop) / 48px (mobile)<br>- 'M': 32px (desktop) / 36px (mobile)<br>- 'S': 24px (desktop) / 36px (mobile) | 'S' \| 'M' \| 'L'             | 'L'     |     No    |
| variant        | Input.Crypto appearance<br>- 'crypto'<br>- 'fiat'                                                                                        | 'crypto' \| 'fiat'            | 'fiat'  |     No    |
| currency       | Symbol to be shown at the beginning of the component                                                                                     | string                        | '$'     |     No    |
| symbol         | Symbol to be shown at the end of the component                                                                                           | string                        | 'BTC'   |     No    |
| maxValue       | Value to override when MAX button is clicked                                                                                             | string                        |         |     No    |
| hasMax         | Whether this component should have MAX button                                                                                            | boolean                       | false   |     No    |
| canChange      | Whether this component should be able to change its symbol                                                                               | boolean                       | false   |     No    |
| decimal        | Number of decimal points shown                                                                                                           | number                        | 2       |     No    |
| onChange       | A function that triggers every changes                                                                                                   | (value: string) => void       |         |     No    |
| onSelectMax    | A function that triggers when MAX is clicked                                                                                             | () => void                    |         |     No    |
| onSelectChange | A function that triggers when Chevron icon is clicked                                                                                    | (isExpanded: boolean) => void |         |     No    |
| className      | Class name for overriding Input.Crypto's style                                                                                           | string                        |         |     No    |

Any HTML input attributes are also available