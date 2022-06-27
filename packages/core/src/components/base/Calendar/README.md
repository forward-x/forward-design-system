# Calendar

## Props

| Name      | Description                                                                                    | Types                                                                      | Default   | Required? |
|-----------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-----------|:---------:|
| onSubmit  | A function that triggers when users select a value                                             | (value: Date \| null \| undefined \| [Date \| null, Date \| null]) => void |           |     No    |
| onChange  | A function that trigger every changes                                                          | (value: Date \| null \| undefined \| [Date \| null, Date \| null]) => void |           |     No    |
| footer    | A footer to be displayed below the calendar (can be set to `null` to remove footer completely) | ReactNode                                                                  |           |     No    |
| className | Class name for overriding Calendar's style                                                     | string                                                                     |           |     No    |


Any [ReactCalendarProps](https://www.npmjs.com/package/react-calendar) are also available