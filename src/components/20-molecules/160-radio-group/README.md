# Radio Group

The Radio Group displays a group of related buttons using flexbox. The parent element must have a class of `.radio-group` and a role of `radiogroup` and the buttons must have a role of `radio` and be the direct descendants of the parent element.

Toggling the `aria-checked` state of one button in a Radio Group to `true` will set the `aria-checked` state of all the other buttons to `false`.

To instantiate a Radio Group, the following JavaScript must be called:

```javascript
const radioGroup = document.querySelector('.radio-group');
new Pinecone.RadioGroup( radioGroup );
```
