# Select

## Usage

The custom select component is a web component built from scratch to enhance the native `<select>` tag. To get started, simply use the `<uk-select>` markup in your HTML code with one `<select data-fn="data-source" hidden></select>` tag as options reference.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
  >
    <select data-fn="data-source" hidden>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </select>
  </uk-select>
</div>
```

## Capturing values

There are several ways to capture values from the `<uk-select>` component. The simplest approach is to add a `name` attribute to the component. When you do this, a hidden input field with the specified name will be automatically generated, allowing you to easily capture the selected value on your server.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
    name="option"
  >
    <select data-fn="data-source" hidden>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </select>
  </uk-select>
</div>
```

<span class="uk-label uk-label-primary">Note</span> If you don't specify a `value` attribute for an `<option>` tag, it will default to using its text content as the value instead.

## Position

Because the `<uk-select>` component uses the [Drop](/docs/latest/kit/drop) component under the hood, we can leverage its positioning capabilities and position our dropdown anywhere we want. To position it, just use the `drop` attribute with your drop options.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-button uk-button-default"
    drop="mode: click; pos: right-center"
    searchable
  >
    <select data-fn="data-source" hidden>
      <option data-description="Can view and comment." value="viewer">
        Viewer
      </option>
      <option data-description="Can view, comment and edit." value="developer">
        Developer
      </option>
      <option
        data-description="Can view, comment and manage billing."
        value="billing"
      >
        Billing
      </option>
      <option data-description="Admin-level to all resources." value="owner">
        Owner
      </option>
    </select>
  </uk-select>
</div>
```

## Size modifiers

There are several size modifiers available. Just add one of the following classes to make the fake input smaller or larger.

| Class             | Description               |
| ----------------- | ------------------------- |
| `.uk-form-xsmall` | Applies extra small size. |
| `.uk-form-small`  | Applies small size.       |
| `.uk-form-medium` | Applies medium size.      |
| `.uk-form-large`  | Applies large size.       |

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2)">
  <uk-select
    cls="button: uk-input-fake uk-form-xsmall justify-between w-full; dropdown: w-full"
  >
    <select data-fn="data-source" hidden>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </select>
  </uk-select>
</div>

<div
  class="mt [h]"
  style="--mt: 4; --h: calc(var(--uk-global-font-size) * 2.25)"
>
  <uk-select
    cls="button: uk-input-fake uk-form-small justify-between w-full; dropdown: w-full"
  >
    <select data-fn="data-source" hidden>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </select>
  </uk-select>
</div>

<div
  class="mt [h]"
  style="--mt: 4; --h: calc(var(--uk-global-font-size) * 2.75)"
>
  <uk-select
    cls="button: uk-input-fake uk-form-medium justify-between w-full; dropdown: w-full"
  >
    <select data-fn="data-source" hidden>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </select>
  </uk-select>
</div>

<div class="mt [h]" style="--mt: 4; --h: calc(var(--uk-global-font-size) * 3)">
  <uk-select
    cls="button: uk-input-fake uk-form-large justify-between w-full; dropdown: w-full"
  >
    <select data-fn="data-source" hidden>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </select>
  </uk-select>
</div>
```

## Adding header

To add a header to your custom select component, use the `<optgroup>` tag, which will be automatically converted into a dropdown header, providing a seamless developer experience.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
  >
    <select data-fn="data-source" hidden>
      <optgroup label="Letter A">
        <option value="apple">Apple</option>
        <option value="apricot">Apricot</option>
        <option value="avocado">Avocado</option>
        <option value="ackee">Ackee</option>
        <option value="asian_pear">Asian Pear</option>
        <option value="abiu">Abiu</option>
        <option value="ambarella">Ambarella</option>
      </optgroup>

      <optgroup label="Letter B">
        <option value="banana">Banana</option>
        <option value="blackberry">Blackberry</option>
        <option value="blueberry">Blueberry</option>
        <option value="boysenberry">Boysenberry</option>
        <option value="breadfruit">Breadfruit</option>
        <option value="bilberry">Bilberry</option>
        <option value="bael">Bael</option>
        <option value="black_sapote">Black Sapote</option>
      </optgroup>

      <optgroup label="Letter C">
        <option value="cherry">Cherry</option>
        <option value="coconut">Coconut</option>
        <option value="cranberry">Cranberry</option>
        <option value="cantaloupe">Cantaloupe</option>
        <option value="clementine">Clementine</option>
        <option value="cactus_pear">Cactus Pear</option>
        <option value="cherimoya">Cherimoya</option>
        <option value="cloudberry">Cloudberry</option>
        <option value="calamansi">Calamansi</option>
      </optgroup>

      <optgroup label="Letter D">
        <option value="date">Date</option>
        <option value="dragonfruit">Dragonfruit</option>
        <option value="durian">Durian</option>
        <option value="damson">Damson</option>
        <option value="dewberry">Dewberry</option>
        <option value="duku">Duku</option>
        <option value="dilly">Dilly</option>
      </optgroup>
    </select>
  </uk-select>
</div>
```

## Selecting multiple values

To enable the selection of multiple values, simply add the `multiple` attribute to the `<uk-select>` element. This will allow users to choose multiple options from the dropdown list.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
    multiple
  >
    <select data-fn="data-source" hidden>
      <option value="python">Python Programming Language</option>
      <option value="javascript">JavaScript Programming Language</option>
      <option value="html">HTML Markup Language</option>
      <option value="css">CSS Styling Language</option>
      <option value="ruby">Ruby Programming Language</option>
      <option value="java">Java Programming Language</option>
      <option value="swift">Swift Programming Language</option>
      <option value="go">Go Programming Language</option>
    </select>
  </uk-select>
</div>
```

<span class="uk-label uk-label-primary">Note</span> When utilizing the
`multiple` attribute, note that it will automatically append `[]` to the name of
your input. This is particularly useful when your server expects multiple
values, even if the user selects only one option. This ensures that your
server-side logic can properly handle the input, regardless of the number of
values selected.

## Prepopulating values

There are two ways to prepopulate values from the `<uk-select>` component. The simplest approach is to add a `selected` attribute to one or more of your `<option>` tags.

```html
<div class="space-y" style="--space-y: 2">
  <label class="uk-form-label display-block">Select your planet</label>
  <div class="uk-form-controls">
    <div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
      <uk-select
        cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
      >
        <select data-fn="data-source" hidden>
          <option>Mars</option>
          <option>Jupiter</option>
          <option>Saturn</option>
          <option selected>Earth</option>
        </select>
      </uk-select>
    </div>
  </div>
</div>

<div class="mt space-y" style="--mt: 4; --space-y: 2">
  <label class="uk-form-label display-block">Select your cars</label>
  <div class="uk-form-controls">
    <div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
      <uk-select
        cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
        multiple
      >
        <select data-fn="data-source" hidden>
          <option selected>Mercedes-Benz</option>
          <option selected>Bentley</option>
          <option>Audi</option>
          <option selected>Porsche</option>
          <option selected>Lamborghini</option>
          <option>Ferrari</option>
        </select>
      </uk-select>
    </div>
  </div>
</div>
```

In multiple mode:

- Clicking an option toggles selection (doesn't close dropdown)
- Selected options show checkmarks
- Button text shows "{'{n}'} options selected" when 2+ options are selected
- Hidden inputs are created with `name[]` for form submission
- Options have `aria-multiselectable="true"`

### Manually setting value

Alternatively, if setting `selected` on individual `<option>` elements is not feasible, you can use the `value` attribute on the `<uk-select>` tag to prepopulate it with default values. This attribute accepts a comma-separated list of values, allowing you to set multiple defaults, such as `value="Mercedes-Benz,Bentley,Porsche,Lamborghini"`.

```html
<div class="space-y" style="--space-y: 2">
  <label class="uk-form-label display-block">Select your planet</label>
  <div class="uk-form-controls">
    <div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
      <uk-select
        cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
        value="Earth"
      >
        <select data-fn="data-source" hidden>
          <option>Mars</option>
          <option>Jupiter</option>
          <option>Saturn</option>
          <option>Earth</option>
        </select>
      </uk-select>
    </div>
  </div>
</div>

<div class="mt space-y" style="--mt: 4; --space-y: 2">
  <label class="uk-form-label display-block">Select your cars</label>
  <div class="uk-form-controls">
    <div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
      <uk-select
        cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
        multiple
        value="Mercedes-Benz,Bentley,Porsche,Lamborghini"
      >
        <select data-fn="data-source" hidden>
          <option>Mercedes-Benz</option>
          <option>Bentley</option>
          <option>Audi</option>
          <option>Porsche</option>
          <option>Lamborghini</option>
          <option>Ferrari</option>
        </select>
      </uk-select>
    </div>
  </div>
</div>
```

<span class="uk-label uk-label-primary">Note</span> When both `value` and
`selected` are used, the `value` attribute takes precedence. Therefore, it's
recommended to use one method or the other to avoid conflicts.

## Disabling options

Similar to the native `<select>` tag, you can disable specific options in the custom select component by adding the `disabled` attribute to one or more of your `<option>` or `<optgroup>` tags. This allows you to prevent users from selecting certain options.

```html
<div class="space-y" style="--space-y: 2">
  <label class="uk-form-label display-block">JavaScript Framework</label>
  <div class="uk-form-controls">
    <div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
      <uk-select
        cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
      >
        <select data-fn="data-source" hidden>
          <option disabled>React</option>
          <option>Angular</option>
          <option>Astro</option>
          <option disabled>Ember.js</option>
          <option disabled>Backbone.js</option>
          <option disabled>jQuery</option>
          <option>Vue</option>
          <option>SvelteKit</option>
        </select>
      </uk-select>
    </div>
  </div>
  <p class="uk-form-help">Disabled options are library and not a framework.</p>
</div>

<div class="mt space-y" style="--mt: 4; --space-y: 2">
  <label class="uk-form-label display-block">Select fruits</label>
  <div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
    <uk-select
      cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
      multiple
    >
      <select data-fn="data-source" hidden>
        <optgroup label="Letter A">
          <option value="apple">Apple</option>
          <option value="apricot">Apricot</option>
          <option value="avocado">Avocado</option>
          <option value="ackee">Ackee</option>
          <option value="asian_pear">Asian Pear</option>
          <option value="abiu">Abiu</option>
          <option value="ambarella">Ambarella</option>
        </optgroup>
        <optgroup label="Letter B" disabled>
          <option value="banana">Banana</option>
          <option value="blackberry">Blackberry</option>
          <option value="blueberry">Blueberry</option>
          <option value="boysenberry">Boysenberry</option>
          <option value="breadfruit">Breadfruit</option>
          <option value="bilberry">Bilberry</option>
          <option value="bael">Bael</option>
          <option value="black_sapote">Black Sapote</option>
        </optgroup>
        <optgroup label="Letter C">
          <option value="cherry">Cherry</option>
          <option value="coconut">Coconut</option>
          <option value="cranberry">Cranberry</option>
          <option value="cantaloupe">Cantaloupe</option>
          <option value="clementine">Clementine</option>
          <option value="cactus_pear">Cactus Pear</option>
          <option value="cherimoya">Cherimoya</option>
          <option value="cloudberry">Cloudberry</option>
          <option value="calamansi">Calamansi</option>
        </optgroup>
        <optgroup label="Letter D" disabled>
          <option value="date">Date</option>
          <option value="dragonfruit">Dragonfruit</option>
          <option value="durian">Durian</option>
          <option value="damson">Damson</option>
          <option value="dewberry">Dewberry</option>
          <option value="duku">Duku</option>
          <option value="dilly">Dilly</option>
        </optgroup>
      </select>
    </uk-select>
  </div>
</div>
```

## Reactivity

By default, the component is not reactive. This is a deliberate design choice, as using [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) can be computationally expensive. As a result, changes to the referenced `<select data-fn="data-source" hidden>` element will not trigger an update.

To enable reactivity, simply add the `data-reactive` attribute to the `<select data-fn="data-source" hidden>` tag. This will use [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) under the hood to monitor the element for changes.

This feature is particularly useful when using libraries like HTMX, where you may need to dynamically update the options in the `<select data-fn="data-source" hidden>` element based on user interactions, such as searching for data or fetching new options from the server.

```html
<uk-select>
  <select data-fn="data-source" data-reactive hidden>
    <!-- -->
  </select>
</uk-select>
```

## Searchable

To add a search box, simply add the `searchable` attribute. This will add an input field within the dropdown menu, enabling users to search for specific options. This feature is particularly useful when dealing with extensive lists, such as selecting a country from a long list of options.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
    placeholder="Select a country"
    searchable
  >
    <select data-fn="data-source" hidden>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Åland Islands">Åland Islands</option>
      <option value="Albania">Albania</option>
      <option value="Algeria">Algeria</option>
      <option value="American Samoa">American Samoa</option>
      <option value="Andorra">Andorra</option>
      <option value="Angola">Angola</option>
      <option value="Anguilla">Anguilla</option>
      <option value="Antarctica">Antarctica</option>
      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
      <option value="Argentina">Argentina</option>
      <option value="Armenia">Armenia</option>
      <option value="Aruba">Aruba</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Barbados">Barbados</option>
      <option value="Belarus">Belarus</option>
      <option value="Belgium">Belgium</option>
      <option value="Belize">Belize</option>
      <option value="Benin">Benin</option>
      <option value="Bermuda">Bermuda</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Bolivia">Bolivia</option>
      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
      <option value="Botswana">Botswana</option>
      <option value="Bouvet Island">Bouvet Island</option>
      <option value="Brazil">Brazil</option>
      <option value="British Indian Ocean Territory">
        British Indian Ocean Territory
      </option>
      <option value="Brunei Darussalam">Brunei Darussalam</option>
      <option value="Bulgaria">Bulgaria</option>
      <option value="Burkina Faso">Burkina Faso</option>
      <option value="Burundi">Burundi</option>
      <option value="Cambodia">Cambodia</option>
      <option value="Cameroon">Cameroon</option>
      <option value="Canada">Canada</option>
      <option value="Cape Verde">Cape Verde</option>
      <option value="Cayman Islands">Cayman Islands</option>
      <option value="Central African Republic">Central African Republic</option>
      <option value="Chad">Chad</option>
      <option value="Chile">Chile</option>
      <option value="China">China</option>
      <option value="Christmas Island">Christmas Island</option>
      <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
      <option value="Colombia">Colombia</option>
      <option value="Comoros">Comoros</option>
      <option value="Congo">Congo</option>
      <option value="Congo, The Democratic Republic of The">
        Congo, The Democratic Republic of The
      </option>
      <option value="Cook Islands">Cook Islands</option>
      <option value="Costa Rica">Costa Rica</option>
      <option value="Cote D'ivoire">Cote D'ivoire</option>
      <option value="Croatia">Croatia</option>
      <option value="Cuba">Cuba</option>
      <option value="Cyprus">Cyprus</option>
      <option value="Czech Republic">Czech Republic</option>
      <option value="Denmark">Denmark</option>
      <option value="Djibouti">Djibouti</option>
      <option value="Dominica">Dominica</option>
      <option value="Dominican Republic">Dominican Republic</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Egypt">Egypt</option>
      <option value="El Salvador">El Salvador</option>
      <option value="Equatorial Guinea">Equatorial Guinea</option>
      <option value="Eritrea">Eritrea</option>
      <option value="Estonia">Estonia</option>
      <option value="Ethiopia">Ethiopia</option>
      <option value="Falkland Islands (Malvinas)">
        Falkland Islands (Malvinas)
      </option>
      <option value="Faroe Islands">Faroe Islands</option>
      <option value="Fiji">Fiji</option>
      <option value="Finland">Finland</option>
      <option value="France">France</option>
      <option value="French Guiana">French Guiana</option>
      <option value="French Polynesia">French Polynesia</option>
      <option value="French Southern Territories">
        French Southern Territories
      </option>
      <option value="Gabon">Gabon</option>
      <option value="Gambia">Gambia</option>
      <option value="Georgia">Georgia</option>
      <option value="Germany">Germany</option>
      <option value="Ghana">Ghana</option>
      <option value="Gibraltar">Gibraltar</option>
      <option value="Greece">Greece</option>
      <option value="Greenland">Greenland</option>
      <option value="Grenada">Grenada</option>
      <option value="Guadeloupe">Guadeloupe</option>
      <option value="Guam">Guam</option>
      <option value="Guatemala">Guatemala</option>
      <option value="Guernsey">Guernsey</option>
      <option value="Guinea">Guinea</option>
      <option value="Guinea-bissau">Guinea-bissau</option>
      <option value="Guyana">Guyana</option>
      <option value="Haiti">Haiti</option>
      <option value="Heard Island and Mcdonald Islands">
        Heard Island and Mcdonald Islands
      </option>
      <option value="Holy See (Vatican City State)">
        Holy See (Vatican City State)
      </option>
      <option value="Honduras">Honduras</option>
      <option value="Hong Kong">Hong Kong</option>
      <option value="Hungary">Hungary</option>
      <option value="Iceland">Iceland</option>
      <option value="India">India</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Iran, Islamic Republic of">
        Iran, Islamic Republic of
      </option>
      <option value="Iraq">Iraq</option>
      <option value="Ireland">Ireland</option>
      <option value="Isle of Man">Isle of Man</option>
      <option value="Israel">Israel</option>
      <option value="Italy">Italy</option>
      <option value="Jamaica">Jamaica</option>
      <option value="Japan">Japan</option>
      <option value="Jersey">Jersey</option>
      <option value="Jordan">Jordan</option>
      <option value="Kazakhstan">Kazakhstan</option>
      <option value="Kenya">Kenya</option>
      <option value="Kiribati">Kiribati</option>
      <option value="Korea, Democratic People's Republic of">
        Korea, Democratic People's Republic of
      </option>
      <option value="Korea, Republic of">Korea, Republic of</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Kyrgyzstan">Kyrgyzstan</option>
      <option value="Lao People's Democratic Republic">
        Lao People's Democratic Republic
      </option>
      <option value="Latvia">Latvia</option>
      <option value="Lebanon">Lebanon</option>
      <option value="Lesotho">Lesotho</option>
      <option value="Liberia">Liberia</option>
      <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
      <option value="Liechtenstein">Liechtenstein</option>
      <option value="Lithuania">Lithuania</option>
      <option value="Luxembourg">Luxembourg</option>
      <option value="Macao">Macao</option>
      <option value="Macedonia, The Former Yugoslav Republic of">
        Macedonia, The Former Yugoslav Republic of
      </option>
      <option value="Madagascar">Madagascar</option>
      <option value="Malawi">Malawi</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Maldives">Maldives</option>
      <option value="Mali">Mali</option>
      <option value="Malta">Malta</option>
      <option value="Marshall Islands">Marshall Islands</option>
      <option value="Martinique">Martinique</option>
      <option value="Mauritania">Mauritania</option>
      <option value="Mauritius">Mauritius</option>
      <option value="Mayotte">Mayotte</option>
      <option value="Mexico">Mexico</option>
      <option value="Micronesia, Federated States of">
        Micronesia, Federated States of
      </option>
      <option value="Moldova, Republic of">Moldova, Republic of</option>
      <option value="Monaco">Monaco</option>
      <option value="Mongolia">Mongolia</option>
      <option value="Montenegro">Montenegro</option>
      <option value="Montserrat">Montserrat</option>
      <option value="Morocco">Morocco</option>
      <option value="Mozambique">Mozambique</option>
      <option value="Myanmar">Myanmar</option>
      <option value="Namibia">Namibia</option>
      <option value="Nauru">Nauru</option>
      <option value="Nepal">Nepal</option>
      <option value="Netherlands">Netherlands</option>
      <option value="Netherlands Antilles">Netherlands Antilles</option>
      <option value="New Caledonia">New Caledonia</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Nicaragua">Nicaragua</option>
      <option value="Niger">Niger</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Niue">Niue</option>
      <option value="Norfolk Island">Norfolk Island</option>
      <option value="Northern Mariana Islands">Northern Mariana Islands</option>
      <option value="Norway">Norway</option>
      <option value="Oman">Oman</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Palau">Palau</option>
      <option value="Palestinian Territory, Occupied">
        Palestinian Territory, Occupied
      </option>
      <option value="Panama">Panama</option>
      <option value="Papua New Guinea">Papua New Guinea</option>
      <option value="Paraguay">Paraguay</option>
      <option value="Peru">Peru</option>
      <option value="Philippines">Philippines</option>
      <option value="Pitcairn">Pitcairn</option>
      <option value="Poland">Poland</option>
      <option value="Portugal">Portugal</option>
      <option value="Puerto Rico">Puerto Rico</option>
      <option value="Qatar">Qatar</option>
      <option value="Reunion">Reunion</option>
      <option value="Romania">Romania</option>
      <option value="Russian Federation">Russian Federation</option>
      <option value="Rwanda">Rwanda</option>
      <option value="Saint Helena">Saint Helena</option>
      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
      <option value="Saint Lucia">Saint Lucia</option>
      <option value="Saint Pierre and Miquelon">
        Saint Pierre and Miquelon
      </option>
      <option value="Saint Vincent and The Grenadines">
        Saint Vincent and The Grenadines
      </option>
      <option value="Samoa">Samoa</option>
      <option value="San Marino">San Marino</option>
      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Senegal">Senegal</option>
      <option value="Serbia">Serbia</option>
      <option value="Seychelles">Seychelles</option>
      <option value="Sierra Leone">Sierra Leone</option>
      <option value="Singapore">Singapore</option>
      <option value="Slovakia">Slovakia</option>
      <option value="Slovenia">Slovenia</option>
      <option value="Solomon Islands">Solomon Islands</option>
      <option value="Somalia">Somalia</option>
      <option value="South Africa">South Africa</option>
      <option value="South Georgia and The South Sandwich Islands">
        South Georgia and The South Sandwich Islands
      </option>
      <option value="Spain">Spain</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="Sudan">Sudan</option>
      <option value="Suriname">Suriname</option>
      <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
      <option value="Swaziland">Swaziland</option>
      <option value="Sweden">Sweden</option>
      <option value="Switzerland">Switzerland</option>
      <option value="Syrian Arab Republic">Syrian Arab Republic</option>
      <option value="Taiwan">Taiwan</option>
      <option value="Tajikistan">Tajikistan</option>
      <option value="Tanzania, United Republic of">
        Tanzania, United Republic of
      </option>
      <option value="Thailand">Thailand</option>
      <option value="Timor-leste">Timor-leste</option>
      <option value="Togo">Togo</option>
      <option value="Tokelau">Tokelau</option>
      <option value="Tonga">Tonga</option>
      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
      <option value="Tunisia">Tunisia</option>
      <option value="Turkey">Turkey</option>
      <option value="Turkmenistan">Turkmenistan</option>
      <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
      <option value="Tuvalu">Tuvalu</option>
      <option value="Uganda">Uganda</option>
      <option value="Ukraine">Ukraine</option>
      <option value="United Arab Emirates">United Arab Emirates</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="United States">United States</option>
      <option value="United States Minor Outlying Islands">
        United States Minor Outlying Islands
      </option>
      <option value="Uruguay">Uruguay</option>
      <option value="Uzbekistan">Uzbekistan</option>
      <option value="Vanuatu">Vanuatu</option>
      <option value="Venezuela">Venezuela</option>
      <option value="Viet Nam">Viet Nam</option>
      <option value="Virgin Islands, British">Virgin Islands, British</option>
      <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
      <option value="Wallis and Futuna">Wallis and Futuna</option>
      <option value="Western Sahara">Western Sahara</option>
      <option value="Yemen">Yemen</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>
    </select>
  </uk-select>
</div>
```

Search features:

- Case-insensitive filtering
- Real-time results as you type
- Searches through option keywords (automatically generated from text)
- Emits `uk-select:search` event on search term change
- Supports keyboard navigation through filtered results

### Custom keywords

Sometimes, there are items that have related keywords that may be slightly off or awkward when included as anchor tags. For these use cases, we can leverage the `data-keywords` attribute.

For example, if we have a "Form" link but also want it to appear when users search for terms like "checkbox," "input," "toggle switch," etc., we can simply add a comma-separated list of terms like this: `data-keywords="apple, mango, lemon"`.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
    name="option"
    searchable
  >
    <select data-fn="data-source" hidden>
      <option data-keywords="apple, mango, lemon" value="option1">
        Option 1
      </option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </select>
  </uk-select>
</div>
```

## Disable input

To prevent user input, add the `disabled` attribute to the `<uk-select>` element. This will disable the custom select, making it impossible for users to enter or modify its value.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
    disabled
  >
    <select data-fn="data-source" hidden>
      <option value="apple">Apple</option>
      <option value="apricot">Apricot</option>
      <option value="avocado" selected>Avocado</option>
      <option value="ackee">Ackee</option>
      <option value="asian_pear">Asian Pear</option>
      <option value="abiu">Abiu</option>
      <option value="ambarella">Ambarella</option>
    </select>
  </uk-select>
</div>
```

## Icon

This component allows you to customize icons through the template system:

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
  >
    <template data-fn="icons">
      <svg
        data-key="chevrons-up-down"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </template>

    <select data-fn="data-source" hidden>
      <option data-icon="circle" value="option1">Option 1</option>
      <option data-icon="circle" value="option2">Option 2</option>
      <option data-icon="circle" value="option3">Option 3</option>
      <option data-icon="circle" value="option4">Option 4</option>
      <option data-icon="circle" value="option5">Option 5</option>
    </select>
  </uk-select>
</div>
```

### Options icon

To add icon to options, just add `data-icon` attribute with the name of the icon to your `<option>` tags.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
  >
    <template data-fn="icons">
      <svg
        data-key="chevrons-up-down"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      <svg
        data-key="circle"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    </template>
    <select data-fn="data-source" hidden>
      <option data-icon="circle" value="option1">Option 1</option>
      <option data-icon="circle" value="option2">Option 2</option>
      <option data-icon="circle" value="option3">Option 3</option>
      <option data-icon="circle" value="option4">Option 4</option>
      <option data-icon="circle" value="option5">Option 5</option>
    </select>
  </uk-select>
</div>
```

## Internationalization

The Select component supports internationalization through multiple methods with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="uk-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
    searchable
    i18n="search-placeholder: Buscar; selection-count: {n} opciones seleccionadas; insert: Insertar; list-label: Opciones; button-label: Seleccionar una opción"
  >
    <select data-fn="data-source" hidden>
      <option value="apple">Manzana</option>
      <option value="banana">Plátano</option>
    </select>
  </uk-select>
</div>
```

### Using a configuration script

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select
    cls="button: uk-input-fake justify-between w-full; dropdown: w-full"
    searchable
    multiple
  >
    <script type="application/json" data-fn="config" hidden>
      {
        "i18n": {
          "search-placeholder": "Rechercher",
          "selection-count": "{n} options sélectionnées",
          "insert": "Insérer",
          "list-label": "Options",
          "button-label": "Sélectionner une option"
        }
      }
    </script>
    <select data-fn="data-source" hidden>
      <option value="apple">Pomme</option>
      <option value="banana">Banane</option>
    </select>
  </uk-select>
</div>
```

### Using global i18n

Place this in your document `<head>` or before any select components:

```html
<script id="uk-i18n" type="application/json">
{
  "uk-select": {
    "search-placeholder": "Suchen",
    "selection-count": "{n} Optionen ausgewählt",
    "insert": "Einfügen",
    "list-label": "Optionen",
    "button-label": "Eine Option auswählen",
  }
}
</script>
```

### Available i18n options

| Key                  | Default                  | Description                                                                  |
| -------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `search-placeholder` | Search                   | Placeholder text for search input field                                      |
| `selection-count`    | {'{n}'} options selected | Text shown when multiple options are selected (supports {'{n}'} placeholder) |
| `insert`             | Insert                   | Button text for inserting custom options                                     |
| `list-label`         | Options                  | ARIA label for the listbox                                                   |
| `button-label`       | Select an option         | ARIA label and default text for the select button                            |

## Custom classes

The Select component supports custom CSS classes through the `cls` attribute. This allows you to style specific elements within the select without modifying the component's internal structure.

### Using simple string format

Apply a class to the default element (button):

```html
<uk-select cls="my-custom-select-button">
  <select data-fn="data-source" hidden>
    <option value="apple">Apple</option>
  </select>
</uk-select>
```

### Using JSON object format

Target specific elements within the select:

```html
<uk-select
  cls='{
    "host-inner": "select-wrapper",
    "button": "uk-input uk-form-large",
    "button-text": "select-text",
    "icon": "select-icon",
    "dropdown": "select-dropdown",
    "list": "select-list",
    "item": "select-item",
    "item-link": "select-link",
    "item-text": "item-label",
    "item-check": "check-icon",
    "search": "search-wrapper",
    "search-input": "uk-input uk-form-small"
  }'
>
  <select data-fn="data-source" hidden>
    <option value="apple">Apple</option>
  </select>
</uk-select>
```

### Using configuration script

```html
<uk-select>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "button": "uk-input",
        "dropdown": "uk-select-dropdown",
        "item-link": "uk-drop-close"
      }
    }
  </script>
  <select data-fn="data-source" hidden>
    <option value="apple">Apple</option>
  </select>
</uk-select>
```

### Available cls targets

| Target          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `host-inner`    | The main wrapper container for the entire component             |
| `button`        | The clickable button that opens the dropdown                    |
| `button-text`   | The text span inside the button showing selected option(s)      |
| `icon`          | The icon element inside the button (when icon attribute is set) |
| `dropdown`      | The dropdown container holding the list and search              |
| `list`          | The listbox (ul) containing all options                         |
| `item`          | Individual list item (li) wrapper                               |
| `item-active`   | The active list item (li)                                       |
| `item-disabled` | Class for disabled list item (li)                               |
| `item-header`   | Group header for grouped options                                |
| `item-link`     | The clickable button/link inside each item                      |
| `item-wrapper`  | Wrapper for item content (icon + text)                          |
| `item-icon`     | Icon element for options with data-icon                         |
| `item-text`     | Text label for the option                                       |
| `item-check`    | Checkmark indicator for selected options                        |
| `item-subtitle` | Description/subtitle text for options with data-description     |
| `search`        | Search input wrapper (when searchable is enabled)               |
| `search-input`  | The actual search input field                                   |
| `search-icon`   | Icon displayed in search input                                  |
| `divider`       | Class for the divider element                                   |

## Custom inline styles

The Select component supports custom inline styles through the `stl` attribute. This allows you to apply specific CSS styles to individual elements within the select.

### Using simple string format

Apply styles to the default element (button):

```html
<uk-select stl="width\: 300px; min-height\: 44px;">
  <select data-fn="data-source">
    <option value="apple">Apple</option>
  </select>
</uk-select>
```

### Using JSON object format

Target specific elements with custom styles:

```html
<uk-select 
  stl='{
    "container": "position: relative;",
    "button": "background: #f8f9fa; border: 1px solid #dee2e6; padding: 0.75rem 1rem;",
    "button-text": "color: #495057; font-weight: 500;",
    "dropdown": "min-width: 320px; max-height: 400px; overflow-y: auto;",
    "item-link": "padding: 0.5rem 1rem; transition: background 0.2s;"
  }'>
  <select data-fn="data-source">
    <option value="apple">Apple</option>
  </select>
</uk-select>
```

### Using configuration script

```html
<uk-select>
  <script type="application/json" data-fn="config">
  {
    "stl": {
      "button": "min-width: 250px;",
      "dropdown": "box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
    }
  }
  </script>
  <select data-fn="data-source">
    <option value="apple">Apple</option>
  </select>
</uk-select>
```

### Available stl targets

The `stl` attribute supports the same targets as the `cls` attribute. See the [Available cls targets](#available-cls-targets) table above for a complete list of targetable elements.

## Error state

To indicate an error state in the form, simply add the `.uk-form-danger` class to the `cls` attribute. This will apply a "danger" state to the component, providing visual feedback to the user.

```html
<div class="space-y" style="--space-y: 2">
  <label
    class="uk-form-label color display-block"
    style="--color: var(--uk-danger-f)"
  >
    Select an option
  </label>
  <div
    class="uk-form-controls [h]"
    style="--h: calc(var(--uk-global-font-size) * 2.5)"
  >
    <uk-select
      cls="button: uk-input-fake uk-form-danger justify-between w-full; dropdown: w-full"
    >
      <select data-fn="data-source" hidden>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </select>
    </uk-select>
  </div>
  <p class="uk-form-help color" style="--color: var(--uk-danger-f)">
    This field is required.
  </p>
</div>
```

## Preventing layout shift

When loading Web Components, a brief delay may cause a flash of unstyled content. To mitigate this issue, consider setting a predefined height on the parent element to prevent layout shift and ensure a smooth user experience.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-select>
    <!-- ... -->
  </uk-select>
</div>
```

## Attributes

The following attributes are available for this component:

| Name                     | Type    | Default                                               | Description                                                                      |
| ------------------------ | ------- | ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| `drop`                   | String  | mode: click; animation: uk-animation-slide-top-small; | Dropdown positioning options (UIkit Drop configuration)                          |
| `searchable`             | Boolean | false                                                 | Enables search functionality to filter options                                   |
| `insertable`             | Boolean | false                                                 | Allows inserting custom options (auto-enables searchable)                        |
| `send-headers`           | String  |                                                       | JSON object of HTTP headers for server validation requests                       |
| `send-url`               | String  |                                                       | Server endpoint URL for validating inserted options                              |
| `send-method`            | String  | POST                                                  | HTTP method for server requests                                                  |
| `multiple`               | Boolean | false                                                 | Enables multi-select mode                                                        |
| `icon`                   | String  |                                                       | Custom icon/text displayed in the button                                         |
| `name`                   | String  |                                                       | Name attribute for hidden input(s), enabling form submission                     |
| `disabled`               | Boolean | false                                                 | Disables the entire component, preventing user interaction                       |
| `required`               | Boolean | false                                                 | Marks the select as required for form validation                                 |
| `placeholder`            | String  |                                                       | Custom placeholder text when no option is selected                               |
| `value`                  | String  |                                                       | Pre-selected value(s). Use comma-separated for multiple selections               |
| `cls`                    | String  |                                                       | Custom CSS classes. Can be simple string or JSON object for targeting elements   |
| `stl`                    | String  |                                                       | Custom inline styles. Can be simple string or JSON object for targeting elements |
| `i18n`                   | String  |                                                       | Internationalization strings as JSON object or via configuration script          |
| `force-prevent-rerender` | Boolean | false                                                 | Prevents component rerendering (useful for HTMX or SPA scenarios)                |

## Events

The Select component triggers the following events:

| Name               | Description                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| `uk-select:input`  | Fired when the selected value(s) change. Event detail contains `{value: string \| string[]}`.             |
| `uk-select:search` | Fired when the search term changes (when searchable is enabled). Event detail contains `{value: string}`. |