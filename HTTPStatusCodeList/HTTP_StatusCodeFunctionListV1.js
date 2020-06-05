// Start of script
// HTTP code (in alert boxes)
function HTTP100_AlertMessage1() {
	alert("About HTTP 100 - Continue\n\nThe server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body. If the client receives an error code such as 403 (Forbidden) or 405 (Method Not Allowed) then it shouldn't send the request's body. The response 417 Expectation Failed indicates that the request should be repeated without the Expect header as it indicates that the server doesn't support expectations (this is the case, for example, of HTTP/1.0 servers).");
}
function HTTP101_AlertMessage1() {
	alert("About HTTP 101 - Switching Protocols\n\nThe requester has asked the server to switch protocols and the server has agreed to do so.");
}
function HTTP102_AlertMessage1() {
	alert("About HTTP 102 - Processing\n\nA WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.");
}
function HTTP103_AlertMessage1() {
	alert("About HTTP 103 - Early hints\n\nUsed to return some response headers before final HTTP message.");
}
// More functions for the rest of the messages go here
// End of script