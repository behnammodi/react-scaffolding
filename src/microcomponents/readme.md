## Microcomponents

- Icon

  - default (name icon)
  - dimension 24x24
  - svg

- IconNotify
  (Icon)

  - notify (true, false)
  - color

- Input

  - default (label)
  - focus
  - symbol
  - mask

- Password

  - default (dot, symbol)

- Button

  - default (text)
  - CTA (borderradius)
  - microcomponent child(front)
  - icon and text
  - color
  - only icon
  - notify (with text notify on front, without text notify on icon)

  ```jsx
  <Button
    text="hello"
    color="#ff00ff"
    iconStart='close'
    iconStartColor="#ff00ff"
    iconEnd='close'
    iconEndColor="#ff00ff"
    notify={true}
  >
  ```

- ButtonIcon

  - deafult (icon)

- SmartButton
  (Button, ButtonIcon)

- Link

  - default (text)
  - symbol

- PinCode

  - default (number, dot)

- Counter

  - default (minute)
    - onEnd
  - color

- Suspend

  - default (symbol)

- Avatar

  - default (image)
  - mode minimal, mode default

- Tab

  - Sections
    - name
    - notify
    - content
  - current tab

- Accordion

  - icon
  - title
  - content
  - config single or multi for openning

- Tag

  - label
  - color

- PriceLabel

  - number
  - simicoln
  - unit rial, dollar, none
  - mode presention and default

- Checkbox

  - title
  - list label and value
  - selectedValues

- Radio

  - title
  - list label and value
  - selectedValue

- MiniCard

  - title
  - subtitle
  - icon
  - background image
  - emptyState true,false
  - action
  - subAction
  - subActionIcon
  - hint
  - content [childredn]
  - notify true, false

- IBANLabel

  - dash

- AccountLabel

  - dash

- CardLabel
  - present dasd or space
