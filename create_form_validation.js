const { Form } = require("react-router-dom");

<html>

<head>
    <title>Form Validation</title>
</head>
<body>
    <Form id="form_validation">
        <label for="name">Name</label>
        <input type="text" id="name" require name="name"/><br/>

        <label for="password">Password</label>
        <input type="password" name="password" require/><br/>

        <label for="address" >Address</label>
        <input type="text" require name="address" id="address"/><br/>

        <button type="submit">Submit</button>

    </Form>
</body>
</html>