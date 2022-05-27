# Input

This component consists of many small components by using jsx dot notation so please see each component's README for more details.

### Related components:
- [Input.Checkbox](./Checkbox)
- [Input.Digits](./Digits)
- [Input.Password](./Password)
- [Input.Radio](./Radio)
- [Input.Search](./Search)
- [Input.Switch](./Switch)

## Props

| Name      | Description                                                                                                              | Types             | Default | Required? |
|-----------|--------------------------------------------------------------------------------------------------------------------------|-------------------|---------|:---------:|
| size      | Size of Input<br>- 'L': 40px (desktop) / 48px (mobile)<br>- 'M': 32px (desktop)<br>- 'S': 24px (desktop) / 36px (mobile) | 'S' \| 'M' \| 'L' | 'L'     |     No    |
| prefix    | Element before value (text is also supported)                                                                            | ReactNode         |         |     No    |
| suffix    | Element after value (text is also supported)                                                                             | ReactNode         |         |     No    |
| className | Class name for overriding Input's style                                                                             | string            |         |     No    |

Any HTML input attributes are also available