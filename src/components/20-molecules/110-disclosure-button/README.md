# Disclosure Button

A disclosure button can be used to toggle the visibility of the content that follows it in the DOM.

To implement the disclosure button component, use the following markup:

```html
<span class="disclosure-label" hidden><!-- Label for content --></span>
<div class="details">
    <!-- Content -->
</div>
```

The `.details` class is optional; any single element that follows the `<span>` will be shown/hidden by the button.

Then, add the following JavaScript to the page:

```javascript
var disclosureLabel = document.querySelector( '.disclosure-label' );
new Pinecone.DisclosureButton( label );
```
