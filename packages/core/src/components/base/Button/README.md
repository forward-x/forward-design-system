# Button

## Props

| Name      | Description                                                                                                               | Types                                                                  | Default   | Required? |
|-----------|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|-----------|:---------:|
| variant   | Button appearance<br>- 'primary'<br>- 'secondary'<br>- 'tertiary'<br>- 'danger'<br>- 'link'<br>- 'icon'                   | 'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'link' \| 'icon' | 'primary' |     No    |
| size      | Size of Button<br>- 'L': 40px (desktop) / 48px (mobile)<br>- 'M': 32px (desktop)<br>- 'S': 24px (desktop) / 36px (mobile) | 'S' \| 'M' \| 'L'                                                      | 'L'       |     No    |
| disabled  | Whether Button is disabled                                                                                                | boolean                                                                | false     |     No    |
| startIcon | Icon before the children element (Will be ignored if variant is 'icon'                                                    | ReactNode                                                              |           |     No    |
| endIcon   | Icon after the children element (Will be ignored if variant is 'icon')                                                    | ReactNode                                                              |           |     No    |
| children  | Element wrapped by Button                                                                                                 | ReactNode                                                              |           |    Yes    |
| className | Class name for overriding Breadcrumbs' style                                                                              | string                                                                 |           |     No    |

Any HTML button attributes are also available