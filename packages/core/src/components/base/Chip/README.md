# Chip

## Props

| Name      | Description                                                                         | Types                         | Default   | Required? |
|-----------|-------------------------------------------------------------------------------------|-------------------------------|-----------|:---------:|
| text      | The displayed text inside the component                                             | string                        |           |    Yes    |
| variant   | Chips appearance<br>- 'default'<br>- 'toggle': the component can be clicked to toggle | 'default' \| 'toggle'         | 'default' |     No    |
| prefix    | Element before text (string is also supported)                                      | ReactNode                     |           |     No    |
| suffix    | Element after text (string is also supported)                                       | ReactNode                     |           |     No    |
| disabled  | Whether this component should be disabled                                           | boolean                       | false     |     No    |
| onChange  | A function that triggers every changes                                              | (isSelected: boolean) => void |           |    No    |
| className | Class name for overriding Chip's style                                              | string                        |           |     No    |