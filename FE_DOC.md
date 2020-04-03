# budget blocks

<img src="madge.svg">

## Front end documentation

## Modules

<dl>
<dt><a href="#module_dispatch/urls">dispatch/urls</a> ⇒ <code>Urls</code></dt>
<dd></dd>
<dt><a href="#LANG
- A module for words viewable to the end-user.module_">LANG
- A module for words viewable to the end-user.</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#default_user">default_user</a> ⇒</dt>
<dd><p>Register/default_user</p>
</dd>
<dt><a href="#default_values">default_values</a> ⇒</dt>
<dd><p>Register/default_values</p>
</dd>
<dt><a href="#Login">Login</a></dt>
<dd><p>Login (React Component)</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#PasswordField">PasswordField(name, placeholder, label, value, handleChange, error, helperText)</a></dt>
<dd><p><code>PasswordField</code> is a convenience wrapper around several components.</p>
</dd>
<dt><a href="#RegForm">RegForm(rProps, rState, rConfirm, rSubmit, rUserChange)</a> ⇒</dt>
<dd><p><code>RegForm</code> is a convenience wrapper
around several components that comprise
the new user registration form.</p>
</dd>
<dt><a href="#clearState">clearState(state, setState)</a></dt>
<dd><p>clearState will callback <code>setState</code> with default values.</p>
</dd>
<dt><a href="#handleUserChange">handleUserChange(e, state, setState)</a></dt>
<dd><p>handleUserChange will callback <code>setState</code> to update <code>state.user</code>.</p>
</dd>
<dt><a href="#handleConfirm">handleConfirm(e, state, setState)</a></dt>
<dd><p>handleConfirm will callback <code>setState</code> to update <code>state.confirmPass</code>.</p>
</dd>
<dt><a href="#handleSubmit">handleSubmit(e, state, setState, props)</a></dt>
<dd><p>handleSubmit will callback <code>setState</code> to update <code>state.confirmPass</code>.</p>
</dd>
<dt><a href="#GenText">GenText(langKey, handleChange, value, error, helperText, fullWidth, variant, id)</a></dt>
<dd><p>TextField with Label</p>
</dd>
<dt><a href="#FirstOnboard">FirstOnboard(history, isFetching, error, linkedAccount, userId)</a></dt>
<dd><p>FirstOnboard</p>
<p>after logging in &amp; prior to the dashboard;
a virtual &quot;waiting room&quot; for the end-user.</p>
</dd>
<dt><a href="#ymdNow">ymdNow()</a> ⇒ <code>String</code></dt>
<dd><p>ymdNow()</p>
<p>todays date, formatted <code>YYYY-MM-DD</code></p>
</dd>
</dl>

<a name="module_dispatch/urls"></a>

## dispatch/urls ⇒ <code>Urls</code>
**Returns**: <code>Urls</code> - environment specific URL(s)  
<a name="module_dispatch/urls..Urls"></a>

### dispatch/urls~Urls ⇒ <code>Urls</code>
**Kind**: inner constant of [<code>dispatch/urls</code>](#module_dispatch/urls)  
**Returns**: <code>Urls</code> - environment specific URL(s)  
<a name="LANG
- A module for words viewable to the end-user.module_"></a>

## LANG
- A module for words viewable to the end-user.
<a name="default_user"></a>

## default\_user ⇒
Register/default_user

**Kind**: global constant  
**Returns**: default Register component state.user  
<a name="default_values"></a>

## default\_values ⇒
Register/default_values

**Kind**: global constant  
**Returns**: default Register component state.values  
<a name="Login"></a>

## Login
Login (React Component)

**Kind**: global constant  
**Renders**: login page  

| Param | Type |
| --- | --- |
| props | <code>\*</code> | 

<a name="PasswordField"></a>

## PasswordField(name, placeholder, label, value, handleChange, error, helperText)
`PasswordField` is a convenience wrapper around several components.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | (internal) |
| placeholder | <code>String</code> | visible when field is empty |
| label | <code>String</code> | user-friendly label of this field |
| value | <code>String</code> | current value of this field |
| handleChange | <code>function</code> | called when `value` changes |
| error | <code>Boolean</code> | when true, the label will be displayed in an error state. |
| helperText | <code>String</code> | insight about this field & it's current state |

<a name="RegForm"></a>

## RegForm(rProps, rState, rConfirm, rSubmit, rUserChange) ⇒
`RegForm` is a convenience wrapper
around several components that comprise
the new user registration form.

**Kind**: global function  
**Returns**: <form className="RegisterForm" ... />  

| Param | Type | Description |
| --- | --- | --- |
| rProps | <code>Object</code> | React component props |
| rState | <code>Object</code> | React component state |
| rConfirm | <code>function</code> | callback => validate |
| rSubmit | <code>function</code> | callback => validate & submit |
| rUserChange | <code>function</code> | callback => validate & update |

<a name="clearState"></a>

## clearState(state, setState)
clearState will callback `setState` with default values.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | form data |
| setState | <code>function</code> | callback to update `state` |

<a name="handleUserChange"></a>

## handleUserChange(e, state, setState)
handleUserChange will callback `setState` to update `state.user`.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | the event |
| state | <code>Object</code> | form data |
| setState | <code>function</code> | callback to update `state` |

<a name="handleConfirm"></a>

## handleConfirm(e, state, setState)
handleConfirm will callback `setState` to update `state.confirmPass`.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | the event |
| state | <code>Object</code> | form data |
| setState | <code>function</code> | callback to update `state` |

<a name="handleSubmit"></a>

## handleSubmit(e, state, setState, props)
handleSubmit will callback `setState` to update `state.confirmPass`.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | the event |
| state | <code>Object</code> | form data |
| setState | <code>function</code> | callback to update `state` |
| props | <code>\*</code> | React component props |

<a name="GenText"></a>

## GenText(langKey, handleChange, value, error, helperText, fullWidth, variant, id)
TextField with Label

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| langKey | <code>String</code> | LANGUAGE_TEXT |
| handleChange | <code>function</code> | event handler |
| value | <code>String</code> | state.value |
| error | <code>String</code> | state.error |
| helperText | <code>String</code> | state.helperText |
| fullWidth | <code>Boolean</code> | If true, the input will take up the full width of its container. |
| variant | <code>String</code> | default 'outline-basic' |
| id | <code>String</code> | default 'outlined' |

<a name="FirstOnboard"></a>

## FirstOnboard(history, isFetching, error, linkedAccount, userId)
FirstOnboard

after logging in & prior to the dashboard;
a virtual "waiting room" for the end-user.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| history | <code>Object</code> | React component props.history |
| isFetching | <code>Boolean</code> | are we waiting for a reply? |
| error | <code>String</code> | contains inforation about error when applicable |
| linkedAccount | <code>Object</code> | returned by Plaid-API after logging in |
| userId | <code>Object</code> | current user Id |

<a name="ymdNow"></a>

## ymdNow() ⇒ <code>String</code>
ymdNow()

todays date, formatted `YYYY-MM-DD`

**Kind**: global function  
**Returns**: <code>String</code> - `YYYY-MM-DD`  

Lambda School Labs