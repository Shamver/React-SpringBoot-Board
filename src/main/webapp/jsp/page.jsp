<%@ page language="java" contentType="text/html; charset=utf-8"
%>
<link rel='stylesheet' href='//cdn.jsdelivr.net/font-kopub/1.0/kopubdotum.css'>
<!doctype html>
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"></script>
    <link rel="stylesheet" href="../css/custom.css">
    <title>${pageName}</title>
    <style>
        body {
            font-family: 'Jeju Gothic', sans-serif !important;
        }
    </style>

</head>

<body>
<div id="root"></div>
<script src="/js/react/${pageName}.bundle.js"></script>
</body>
</html>