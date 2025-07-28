<?php
// الاتصال بقاعدة البيانات
$conn = new mysqli("localhost", "root", "", "contact_form");

// التحقق من الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// التحقق من إرسال الفورم
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone'];
    $message = $_POST['Message'];

    // تجهيز الاستعلام
    $sql = "INSERT INTO contacts (name, email, phone, message, created_at) 
            VALUES ('$name', '$email', '$phone', '$message', NOW())";

    // تنفيذ الاستعلام
    if ($conn->query($sql) === TRUE) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// غلق الاتصال
$conn->close();
?>
