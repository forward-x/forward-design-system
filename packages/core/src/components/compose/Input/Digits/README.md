# Input.Digits

## Props

| Name      | Description                                                                                                              | Types                   | Default | Required? |
|-----------|--------------------------------------------------------------------------------------------------------------------------|-------------------------|---------|:---------:|
| length    | The number of digits                                                                                                     | number                  | 6       |     No    |
| size      | Size of Input<br>- 'L': 40px (desktop) / 48px (mobile)<br>- 'M': 32px (desktop)<br>- 'S': 24px (desktop) / 36px (mobile) | 'L' \| 'M' \| 'S'       | 'L'     |     No    |
| disabled  | Whether this component should be disabled                                                                                | boolean                 | false   |     No    |
| onChange  | A function that triggers every changes                                                                                   | (value: string) => void |         |    No    |
| className | Class name for overriding Input.Digits' style                                                                            | string                  |         |     No    |