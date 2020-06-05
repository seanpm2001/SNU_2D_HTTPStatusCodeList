// Start of script
// JavaScript console
console.log("This page doesn't appear to be having any issues with HTTP");
console.log("==\nJavaScript console for the HTTP status code list page");
// End of script
</script>
<script>
// Start of script
// HTTP code (in alert boxes)
// 1.x.x range
// Total HTTP codes in this range: 4
function HTTP100_AlertMessage1() {
	alert("About HTTP 100 - Continue\n\nThe server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body. If the client receives an error code such as 403 (Forbidden) or 405 (Method Not Allowed) then it shouldn't send the request's body. The response 417 Expectation Failed indicates that the request should be repeated without the Expect header as it indicates that the server doesn't support expectations (this is the case, for example, of HTTP/1.0 servers).");
	//console.log("Popup notified for HTTP status 100"); // This broke the page for some reason, so I commented it out
}
function HTTP101_AlertMessage1() {
	alert("About HTTP 101 - Switching Protocols\n\nThe requester has asked the server to switch protocols and the server has agreed to do so.");
	//console.log("Popup notified for HTTP status 101");
}
function HTTP102_AlertMessage1() {
	alert("About HTTP 102 - Processing\n\nA WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.");
	//console.log("Popup notified for HTTP status 102");
}
function HTTP103_AlertMessage1() {
	alert("About HTTP 103 - Early hints\n\nUsed to return some response headers before final HTTP message.");
	//console.log("Popup notified for HTTP status 103");
}
// 2.x.x range
// Total HTTP codes in this range: 9
function HTTP200_AlertMessage1() {
	alert("About HTTP 200 -OK\nStandard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.");
	//console.log("Popup notified for HTTP status 200");
}
function HTTP201_AlertMessage1() {
	alert("About HTTP 201 - Created\nThe request has been fulfilled, resulting in the creation of a new resource.");
}
function HTTP202_AlertMessage1() {
	alert("About HTTP 202 - Accepted\nThe request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, and may be disallowed when processing occurs.");
}
function HTTP203_AlertMessage1() {
	alert("About HTTP 203 - Non-Authoritative Information (since HTTP/1.1)\nThe server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.");
}
function HTTP204_AlertMessage1() {
	alert("About HTTP 204 - No content\nThe server successfully processed the request and is not returning any content.");
}
function HTTP205_AlertMessage1() {
	alert("About HTTP 205 - Reset content\nThe server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.");
}
function HTTP206_AlertMessage1() {
	alert("About HTTP 206 - Partial Content (RFC 7233)\nThe server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.");
}
function HTTP207_AlertMessage1() {
	alert("About HTTP 207 - Multi-Status (WebDAV; RFC 4918)\nThe message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.");
}
function HTTP208_AlertMessage1() {
	alert("About HTTP 208 - Already Reported (WebDAV; RFC 5842)\nThe members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.");
}
function HTTP226_AlertMessage1() {
	alert("About HTTP 226 - IM Used (RFC 3229)\nThe server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.");
}
// 3.x.x range
// Total HTTP codes in this range: 9
function HTTP300_AlertMessage1() {
	alert("About HTTP 300 - Multiple choices\nIndicates multiple options for the resource from which the client may choose (via agent-driven content negotiation). For example, this code could be used to present multiple video format options, to list files with different filename extensions, or to suggest word-sense disambiguation.");
}
function HTTP301_AlertMessage1() {
	alert("About HTTP 301 - Moved permanently\nThis and all future requests should be directed to the given URI.");
}
function HTTP302_AlertMessage1() {
	alert("About HTTP 302 -Found (Previously ''Moved temporarily''\nTells the client to look at (browse to) another URL. 302 has been superseded by 303 and 307. This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was ''Moved Temporarily''),[22] but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.[23] However, some Web applications and frameworks use the 302 status code as if it were the 303.");
}
function HTTP303_AlertMessage1() {
	alert("About HTTP 303 - See Other (since HTTP/1.1)\nThe response to the request can be found under another URI using the GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI.");
}
function HTTP304_AlertMessage1() {
	alert("About HTTP 304 - Not Modified (RFC 7232)\nIndicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.");
}
function HTTP305_AlertMessage1() {
	alert("About HTTP 305 - Use Proxy (since HTTP/1.1)\nThe requested resource is available only through a proxy, the address for which is provided in the response. Many HTTP clients (such as Mozilla Firefox and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.");
}
function HTTP306_AlertMessage1() {
	alert("About HTTP 306 - Switch Proxy\nNo longer used. Originally meant ''Subsequent requests should use the specified proxy.''");
}
function HTTP307_AlertMessage1() {
	alert("About HTTP 307 - Temporary Redirect (since HTTP/1.1)\nIn this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request.");
}
function HTTP308_AlertMessage1() {
	alert("About HTTP 308 - Permanent Redirect (RFC 7538)\nThe request and all future requests should be repeated using another URI. 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.");
}
// 4.x.x range
// Total HTTP codes in this range: 28
function HTTP400_AlertMessage1() {
	alert("About HTTP 400 - Bad request\nThe server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).");
}
function HTTP401_AlertMessage1() {
	alert("About HTTP 401 - Unauthorized (RFC 7235)\nSimilar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication. 401 semantically means ''unauthenticated'', i.e. the user does not have the necessary credentials. Note: Some sites incorrectly issue HTTP 401 when an IP address is banned from the website (usually the website domain) and that specific address is refused permission to access a website.");
}
function HTTP402_AlertMessage1() {
	alert("About HTTP 402 - Payment required\nReserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests. Sipgate uses this code if an account does not have sufficient funds to start a call. Shopify uses this code when the store has not paid their fees and is temporarily disabled. ");
}
function HTTP403_AlertMessage1() {
	alert("About HTTP 403 - Forbidden\nThe request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort.");
}
function HTTP404_AlertMessage1() {
	alert("About HTTP 404 - Not found\nThe requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.");
}
function HTTP405_AlertMessage1() {
	alert("About HTTP 405 - Method Not Allowed\nA request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.");
}
function HTTP406_AlertMessage1() {
	alert("About HTTP 406 - Not Acceptable\nThe requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request. See Content negotiation.");
}
function HTTP407_AlertMessage1() {
	alert("About HTTP 407 - Proxy Authentication Required (RFC 7235)\nThe client must first authenticate itself with the proxy.");
}
function HTTP408_AlertMessage1() {
	alert("About HTTP 408 - Request Timeout\nThe server timed out waiting for the request. According to HTTP specifications: ''The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.''");
}
function HTTP409_AlertMessage1() {
	alert("About HTTP 409 - Conflict\nIndicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.");
}
function HTTP410_AlertMessage1() {
	alert("About HTTP 410 - Gone\nIndicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a ''404 Not Found'' may be used instead.");
}
function HTTP411_AlertMessage1() {
	alert("About HTTP 411 - Length required\nThe request did not specify the length of its content, which is required by the requested resource.");
}
function HTTP412_AlertMessage1() {
	alert("About HTTP 412 - Precondition Failed (RFC 7232)\nThe server does not meet one of the preconditions that the requester put on the request.");
}
function HTTP413_AlertMessage1() {
	alert("About HTTP 413 - Payload Too Large (RFC 7231)\nThe request is larger than the server is willing or able to process. Previously called ''Request Entity Too Large''.");
}
function HTTP414_AlertMessage1() {
	alert("About HTTP 414 - URI Too Long (RFC 7231)\nhe URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request. Called ''Request-URI Too Long'' previously.");
}
function HTTP415_AlertMessage1() {
	alert("About HTTP 415 - Unsupported Media Type\nThe request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.");
}
function HTTP416_AlertMessage1() {
	alert("About HTTP 416 - Range Not Satisfiable (RFC 7233)\nThe client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file. Called ''Requested Range Not Satisfiable'' previously.");
}
function HTTP417_AlertMessage1() {
	alert("About HTTP 417 - Expectation Failed\nThe server cannot meet the requirements of the Expect request-header field.");
}
function HTTP418_AlertMessage1() {
	alert("About HTTP 418 - I'm a teapot (RFC 2324, RFC 7168)\nThis code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.");
}
function HTTP421_AlertMessage1() {
	alert("About HTTP 421 - Misdirected Request (RFC 7540)\nThe request was directed at a server that is not able to produce a response (for example because of connection reuse).");
}
function HTTP422_AlertMessage1() {
	alert("About HTTP 422 - Unprocessable Entity (WebDAV; RFC 4918)\nThe request was well-formed but was unable to be followed due to semantic errors.");
}
function HTTP423_AlertMessage1() {
	alert("About HTTP 423 - Locked (WebDAV; RFC 4918)\nThe resource that is being accessed is locked.");
}
function HTTP424_AlertMessage1() {
	alert("About HTTP 424 - Failed Dependency (WebDAV; RFC 4918)\nThe request failed because it depended on another request and that request failed (e.g., a PROPPATCH).");
}
function HTTP426_AlertMessage1() {
	alert("About HTTP 426 - Upgrade required\nThe client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.");
}
function HTTP428_AlertMessage1() {
	alert("About HTTP 428 - Precondition Required (RFC 6585)\nThe origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.");
}
function HTTP429_AlertMessage1() {
	alert("About HTTP 429 - Too Many Requests (RFC 6585)\nThe user has sent too many requests in a given amount of time. Intended for use with rate- limiting schemes.");
}
function HTTP431_AlertMessage1() {
	alert("About HTTP 431 - Request Header Fields Too Large (RFC 6585)\nThe server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.");
}
function HTTP451_AlertMessage1() {
	alert("About HTTP 451 - Unavailable For Legal Reasons (RFC 7725)\nA server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451 (see the Acknowledgements in the RFC).");
}
// 5.x.x range
// Total HTTP codes in this range: 11
function HTTP500_AlertMessage1() {
	alert("About HTTP 500 - Internal Server Error\nA generic error message, given when an unexpected condition was encountered and no more specific message is suitable.");
}
function HTTP501_AlertMessage1() {
	alert("About HTTP 501 - Not Implemented\nThe server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API).");
}
function HTTP502_AlertMessage1() {
	alert("About HTTP 502 - Bad Gateway\nThe server was acting as a gateway or proxy and received an invalid response from the upstream server.");
}
function HTTP503_AlertMessage1() {
	alert("About HTTP 503 - Service unavailable\nThe server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.");
}
function HTTP504_AlertMessage1() {
	alert("About HTTP 504 - Gateway timeout\nThe server was acting as a gateway or proxy and did not receive a timely response from the upstream server.");
}
function HTTP505_AlertMessage1() {
	alert("About HTTP 505 - HTTP Version Not Supported\nThe server does not support the HTTP protocol version used in the request.");
}
function HTTP506_AlertMessage1() {
	alert("About HTTP 506 - Variant Also Negotiates (RFC 2295)\nTransparent content negotiation for the request results in a circular reference.");
}
function HTTP507_AlertMessage1() {
	alert("About HTTP 507 - Insufficient Storage (WebDAV; RFC 4918)\nThe server is unable to store the representation needed to complete the request.");
}
function HTTP508_AlertMessage1() {
	alert("About HTTP 508 - Loop Detected (WebDAV; RFC 5842)\nThe server detected an infinite loop while processing the request (sent instead of 208 Already Reported).");
}
// 509 Doesn't exist
function HTTP510_AlertMessage1() {
	alert("About HTTP 510 - Not Extended (RFC 2774)\nFurther extensions to the request are required for the server to fulfil it.");
}
function HTTP511_AlertMessage1() {
	alert("About HTTP 511 - Network Authentication Required (RFC 6585)\nThe client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., ''captive portals'' used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).");
}
// Unofficial range
// Total HTTP codes in this range: 12
function unofficial_HTTP103_AlertMessage1() {
	alert("About Unofficial HTTP 103 - Checkpoint\nUsed in the resumable requests proposal to resume aborted PUT or POST requests.");
}
function unofficial_HTTP218_AlertMessage1() {
	alert("About Unofficial HTTP 218 This is fine (Apache Web Server)\nUsed as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.");
}
function unofficial_HTTP419_AlertMessage1() {
	alert("About Unofficial HTTP 419 Page Expired (Laravel Framework)\nUsed by the Laravel Framework when a CSRF Token is missing or expired.");
}
function unofficial_HTTP420A_AlertMessage1() {
	alert("About Unofficial HTTP 420A Method Failure (Spring Framework)\nA deprecated response used by the Spring Framework when a method has failed.");
}
function unofficial_HTTP420B_AlertMessage1() {
	alert("About Unofficial HTTP 420B Enhance Your Calm (Twitter)\nReturned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.");
}
function unofficial_HTTP450_AlertMessage1() {
	alert("About Unofficial HTTP 450 Blocked by Windows Parental Controls (Microsoft)\nThe Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.");
}
function unofficial_HTTP498_AlertMessage1() {
	alert("About Unofficial HTTP 498 Invalid Token (Esri)\nReturned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.");
}
function unofficial_HTTP499_AlertMessage1() {
	alert("About Unofficial HTTP 499 Token Required (Esri)\nReturned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.");
}
function unofficial_HTTP509_AlertMessage1() {
	alert("About Unofficial HTTP 509 Bandwidth Limit Exceeded (Apache Web Server/cPanel)\nThe server has exceeded the bandwidth specified by the server administrator; this is often used by shared hosting providers to limit the bandwidth of customers.");
}
function unofficial_HTTP526_AlertMessage1() {
	alert("About Unofficial HTTP 526 Invalid SSL Certificate\nUsed by Cloudflare and Cloud Foundry's gorouter to indicate failure to validate the SSL/TLS certificate that the origin server presented.");
}
function unofficial_HTTP530_AlertMessage1() {
	alert("About Unofficial HTTP 530 Site is frozen\nUsed by the Pantheon web platform to indicate a site that has been frozen due to inactivity.");
}
function unofficial_HTTP598_AlertMessage1() {
	alert("About Unofficial HTTP 598 (Informal convention) Network read timeout error\nUsed by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.");
}
// Microsoft range
// Total HTTP codes in this range: 3
function MicrosoftHTTP440_AlertMessage1() {
	alert("About Microsoft HTTP 440 Login Time-out\nThe client's session has expired and must log in again.");
}
function MicrosoftHTTP449_AlertMessage1() {
	alert("About Microsoft HTTP 449 Retry With\nThe server cannot honour the request because the user has not provided the required information.");
}
function MicrosoftHTTP451_AlertMessage1() {
	alert("About Microsoft HTTP 451A Redirect\nUsed in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox. The client is expected to re-run the HTTP AutoDiscover operation to find a more appropriate server.");
}
// NGinx range
// Total HTTP codes in this range: 6
function nginxHTTP444_AlertMessage1() {
	alert("About NGinx HTTP 444 No Response\nUsed internally to instruct the server to return no information to the client and close the connection immediately.");
}
function nginxHTTP494_AlertMessage1() {
	alert("About NGinx HTTP 494 Request header too large\nClient sent too large request or too long header line.");
}
function nginxHTTP495_AlertMessage1() {
	alert("About NGinx HTTP 495 SSL Certificate Error\nAn expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.");
}
function nginxHTTP496_AlertMessage1() {
	alert("About NGinx HTTP 496 SSL Certificate Required\nAn expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.");
}
function nginxHTTP497_AlertMessage1() {
	alert("About NGinx 497 HTTP Request Sent to HTTPS Port\nAn expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.");
}
function nginxHTTP499_AlertMessage1() {
	alert("About NGinx HTTP 499 Client Closed Request\nUsed when the client has closed the request before the server could send a response.");
}
// Cloudflare range
// Total HTTP codes in this range: 9
function cloudflareHTTP520_AlertMessage1() {
	alert("About Cloudflare 520 Unknown Error\nThe 520 error is used as a ''catch-all response for when the origin server returns something unexpected'', listing connection resets, large headers, and empty or invalid responses as common triggers.");
}
function cloudflareHTTP521_AlertMessage1() {
	alert("About Cloudflare 521 Web Server Is Down\nThe origin server has refused the connection from Cloudflare.");
}
function cloudflareHTTP522_AlertMessage1() {
	alert("About Cloudflare 522 Connection Timed Out\nCloudflare could not negotiate a TCP handshake with the origin server.");
}
function cloudflareHTTP523_AlertMessage1() {
	alert("About Cloudflare 523 Origin Is Unreachable\nCloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect.");
}
function cloudflareHTTP524_AlertMessage1() {
	alert("About Cloudflare 524 A Timeout Occurred\nCloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.");
}
function cloudflareHTTP525_AlertMessage1() {
	alert("About Cloudflare 525 SSL Handshake Failed\nCloudflare could not negotiate a SSL/TLS handshake with the origin server.");
}
function cloudflareHTTP526_AlertMessage1() {
	alert("About Cloudflare 526 Invalid SSL Certificate\nCloudflare could not validate the SSL certificate on the origin web server.");
}
function cloudflareHTTP527_AlertMessage1() {
	alert("About Cloudflare 527 Railgun Error\nError 527 indicates that the request timed out or failed after the WAN connection had been established.");
}
function cloudflareHTTP530_AlertMessage1() {
	alert("About Cloudflare 530 Origin DNS Error\nError 530 indicates that the requested host name could not be resolved on the Cloudflare network to an origin server.");
}
// AWS (Amazon Web Services) range
// Total HTTP codes in this range: 2
function awsHTTP460_AlertMessage1() {
	alert("About AWS (Amazon Web Services) 460\n Client closed the connection with the load balancer before the idle timeout period elapsed. Typically when client timeout is sooner than the Elastic Load Balancer's timeout.");
}
function awsHTTP463_AlertMessage1() {
	alert("About AWS (Amazon Web Services) 463\nThe load balancer received an X-Forwarded-For request header with more than 30 IP addresses.");
}
// Wikipedia reference source printout
// Total revisions: 2
/*
function wikipediareferenceMarch8th2019_AlertMessage1() {
	alert("Wikipedia source 3.8.2019\nList of HTTP status codes\nFrom Wikipedia, the free encyclopedia\nThis is a list of Hypertext Transfer Protocol (HTTP) response status codes. Status codes are issued by a server in response to a client's request made to the server. It includes codes from IETF Request for Comments (RFCs), other specifications, and some additional codes used in some common applications of the Hypertext Transfer Protocol (HTTP). The first digit of the status code specifies one of five standard classes of responses. The message phrases shown are typical, but any human-readable alternative may be provided. Unless otherwise stated, the status code is part of the HTTP/1.1 standard (RFC 7231).[1] The Internet Assigned Numbers Authority (IANA) maintains the official registry of HTTP status codes. [2] Microsoft Internet Information Services (IIS) sometimes uses additional decimal sub-codes for more specific information,[3] however these sub-codes only appear in the response payload and in documentation, not in the place of an actual HTTP status code. All HTTP response status codes are separated into five classes (or categories). The first digit of the status code defines the class of response. The last two digits do not have any class or categorization role. There are five values for the first digit:");
*/
/*
•
•
•
•
•
1xx (Informational): The request was received, continuing process
2xx (Successful): The request was successfully received, understood, and accepted
3xx (Redirection): Further action needs to be taken in order to complete the request
4xx (Client Error): The request contains bad syntax or cannot be fulfilled
5xx (Server Error): The server failed to fulfill an apparently valid request
Contents
•
•
•
•
•
•
1 1xx Informational response
2 2xx Success
3 3xx Redirection
4 4xx Client errors
5 5xx Server errors
6 Unofficial codes
• 6.1 Internet Information Services
• 6.2 nginx
•
•
•
•
• 6.3 Cloudflare
7 See also
8 Notes
9 References
10 External links
1xx Informational response
An informational response indicates that the request was received and understood. It is issued on a
provisional basis while request processing continues. It alerts the client to wait for a final response. The
message consists only of the status line and optional header fields, and is terminated by an empty line.
As the HTTP/1.0 standard did not define any 1xx status codes, servers must not[note 1] send a 1xx
response to an HTTP/1.0 compliant client except under experimental conditions.[4]
100 Continue
The server has received the request headers and the client should proceed to send the request
body (in the case of a request for which a body needs to be sent; for example, a POST request).
Sending a large request body to a server after a request has been rejected for inappropriate
headers would be inefficient. To have a server check the request's headers, a client must send
Expect: 100-continue as a header in its initial request and receive a 100 Continue
status code in response before sending the body. If the client receives an error code such as 403
(Forbidden) or 405 (Method Not Allowed) then it shouldn't send the request's body. The response
417 Expectation Failed indicates that the request should be repeated without the
Expect header as it indicates that the server doesn't support expectations (this is the case, for
example, of HTTP/1.0 servers).[5]
101 Switching Protocols
The requester has asked the server to switch protocols and the server has agreed to do so.[6]
102 Processing (WebDAV; RFC 2518)
A WebDAV request may contain many sub-requests involving file operations, requiring a long
time to complete the request. This code indicates that the server has received and is processing
the request, but no response is available yet.[7] This prevents the client from timing out and
assuming the request was lost.
103 Early Hints (RFC 8297)
Used to return some response headers before final HTTP message.[8]
2xx Success
This class of status codes indicates the action requested by the client was received, understood and
accepted.[2]
200 OK
Standard response for successful HTTP requests. The actual response will depend on the request
method used. In a GET request, the response will contain an entity corresponding to the requested
resource. In a POST request, the response will contain an entity describing or containing the
result of the action.[9]
201 Created
The request has been fulfilled, resulting in the creation of a new resource.[10]
202 Accepted
The request has been accepted for processing, but the processing has not been completed. The
request might or might not be eventually acted upon, and may be disallowed when processing
occurs.[11]
203 Non-Authoritative Information (since HTTP/1.1)
The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its
origin, but is returning a modified version of the origin's response.[12][13]
204 No Content
The server successfully processed the request and is not returning any content.[14]
205 Reset Content
The server successfully processed the request, but is not returning any content. Unlike a 204
response, this response requires that the requester reset the document view.[15]
206 Partial Content (RFC 7233)
The server is delivering only part of the resource (byte serving) due to a range header sent by the
client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or
split a download into multiple simultaneous streams.[16]
207 Multi-Status (WebDAV; RFC 4918)
The message body that follows is by default an XML message and can contain a number of
separate response codes, depending on how many sub-requests were made.[17]
208 Already Reported (WebDAV; RFC 5842)
The members of a DAV binding have already been enumerated in a preceding part of the
(multistatus) response, and are not being included again.
226 IM Used (RFC 3229)
The server has fulfilled a request for the resource, and the response is a representation of the
result of one or more instance-manipulations applied to the current instance.[18]
3xx Redirection
This class of status code indicates the client must take additional action to complete the request. Many
of these status codes are used in URL redirection.[2]
A user agent may carry out the additional action with no user interaction only if the method used in the
second request is GET or HEAD. A user agent may automatically redirect a request. A user agent
should detect and intervene to prevent cyclical redirects.[19]
300 Multiple Choices
Indicates multiple options for the resource from which the client may choose (via agent-driven
content negotiation). For example, this code could be used to present multiple video format
options, to list files with different filename extensions, or to suggest word-sense disambiguation.
[20]
301 Moved Permanently
This and all future requests should be directed to the given URI.[21]
302 Found (Previously "Moved temporarily")
Tells the client to look at (browse to) another URL. 302 has been superseded by 303 and 307.
This is an example of industry practice contradicting the standard. The HTTP/1.0 specification
(RFC 1945) required the client to perform a temporary redirect (the original describing phrase
was "Moved Temporarily"),[22] but popular browsers implemented 302 with the functionality of
a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the
two behaviours.[23] However, some Web applications and frameworks use the 302 status code as
if it were the 303.[24]
303 See Other (since HTTP/1.1)
The response to the request can be found under another URI using the GET method. When
received in response to a POST (or PUT/DELETE), the client should presume that the server has
received the data and should issue a new GET request to the given URI.[25]
304 Not Modified (RFC 7232)
Indicates that the resource has not been modified since the version specified by the request
headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the
resource since the client still has a previously-downloaded copy.[26]
305 Use Proxy (since HTTP/1.1)
The requested resource is available only through a proxy, the address for which is provided in the
response. Many HTTP clients (such as Mozilla Firefox[27] and Internet Explorer) do not
correctly handle responses with this status code, primarily for security reasons.[28]
306 Switch Proxy
No longer used. Originally meant "Subsequent requests should use the specified proxy."[29]
307 Temporary Redirect (since HTTP/1.1)
In this case, the request should be repeated with another URI; however, future requests should
still use the original URI. In contrast to how 302 was historically implemented, the request
method is not allowed to be changed when reissuing the original request. For example, a POST
request should be repeated using another POST request.[30]
308 Permanent Redirect (RFC 7538)
The request and all future requests should be repeated using another URI. 307 and 308 parallel
the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example,
submitting a form to a permanently redirected resource may continue smoothly.[31]
4xx Client errors
404 error on Wikipedia
This class of status code is intended for situations in which the error seems to have been caused by the
client. Except when responding to a HEAD request, the server should include an entity containing an
explanation of the error situation, and whether it is a temporary or permanent condition. These status
codes are applicable to any request method. User agents should display any included entity to the user.
[32]
400 Bad Request
The server cannot or will not process the request due to an apparent client error (e.g., malformed
request syntax, size too large, invalid request message framing, or deceptive request routing).[33]
401 Unauthorized (RFC 7235)
Similar to 403 Forbidden, but specifically for use when authentication is required and has failed
or has not yet been provided. The response must include a WWW-Authenticate header field
containing a challenge applicable to the requested resource. See Basic access authentication and
Digest access authentication.[34] 401 semantically means "unauthenticated",[35] i.e. the user
does not have the necessary credentials.
Note: Some sites incorrectly issue HTTP 401 when an IP address is banned from the website
(usually the website domain) and that specific address is refused permission to access a website.
402 Payment Required
Reserved for future use. The original intention was that this code might be used as part of some
form of digital cash or micropayment scheme, as proposed for example by GNU Taler[36], but
that has not yet happened, and this code is not usually used. Google Developers API uses this
status if a particular developer has exceeded the daily limit on requests.[37] Sipgate uses this
code if an account does not have sufficient funds to start a call.[38] Shopify uses this code when
the store has not paid their fees and is temporarily disabled. [39]
403 Forbidden
The request was valid, but the server is refusing action. The user might not have the necessary
permissions for a resource, or may need an account of some sort.
404 Not Found
The requested resource could not be found but may be available in the future. Subsequent
requests by the client are permissible.
405 Method Not Allowed
A request method is not supported for the requested resource; for example, a GET request on a
form that requires data to be presented via POST, or a PUT request on a read-only resource.
406 Not Acceptable
The requested resource is capable of generating only content not acceptable according to the
Accept headers sent in the request.[40] See Content negotiation.
407 Proxy Authentication Required (RFC 7235)
The client must first authenticate itself with the proxy.[41]
408 Request Timeout
The server timed out waiting for the request. According to HTTP specifications: "The client did
not produce a request within the time that the server was prepared to wait. The client MAY repeat
the request without modifications at any later time."[42]
409 Conflict
Indicates that the request could not be processed because of conflict in the current state of the
resource, such as an edit conflict between multiple simultaneous updates.
410 Gone
Indicates that the resource requested is no longer available and will not be available again. This
should be used when a resource has been intentionally removed and the resource should be
purged. Upon receiving a 410 status code, the client should not request the resource in the future.
Clients such as search engines should remove the resource from their indices.[43] Most use cases
do not require clients and search engines to purge the resource, and a "404 Not Found" may be
used instead.
411 Length Required
The request did not specify the length of its content, which is required by the requested resource.
[44]
412 Precondition Failed (RFC 7232)
The server does not meet one of the preconditions that the requester put on the request.[45]
413 Payload Too Large (RFC 7231)
The request is larger than the server is willing or able to process. Previously called "Request
Entity Too Large".[46]
414 URI Too Long (RFC 7231)
The URI provided was too long for the server to process. Often the result of too much data being
encoded as a query-string of a GET request, in which case it should be converted to a POST
request.[47] Called "Request-URI Too Long" previously.[48]
415 Unsupported Media Type
The request entity has a media type which the server or resource does not support. For example,
the client uploads an image as image/svg+xml, but the server requires that images use a different
format.
416 Range Not Satisfiable (RFC 7233)
The client has asked for a portion of the file (byte serving), but the server cannot supply that
portion. For example, if the client asked for a part of the file that lies beyond the end of the file.
[49] Called "Requested Range Not Satisfiable" previously.[50]
417 Expectation Failed
The server cannot meet the requirements of the Expect request-header field.[51]
418 I'm a teapot (RFC 2324, RFC 7168)
This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324,
Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP
servers. The RFC specifies this code should be returned by teapots requested to brew coffee.[52]
This HTTP status is used as an Easter egg in some websites, including Google.com.[53][54]
421 Misdirected Request (RFC 7540)
The request was directed at a server that is not able to produce a response[55] (for example
because of connection reuse).[56]
422 Unprocessable Entity (WebDAV; RFC 4918)
The request was well-formed but was unable to be followed due to semantic errors.[17]
423 Locked (WebDAV; RFC 4918)
The resource that is being accessed is locked.[17]
424 Failed Dependency (WebDAV; RFC 4918)
The request failed because it depended on another request and that request failed (e.g., a
PROPPATCH).[17]
426 Upgrade Required
The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header
field.[57]
428 Precondition Required (RFC 6585)
The origin server requires the request to be conditional. Intended to prevent the 'lost update'
problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when
meanwhile a third party has modified the state on the server, leading to a conflict.[58]
429 Too Many Requests (RFC 6585)
The user has sent too many requests in a given amount of time. Intended for use with rate-
limiting schemes.[58]
431 Request Header Fields Too Large (RFC 6585)
The server is unwilling to process the request because either an individual header field, or all the
header fields collectively, are too large.[58]
451 Unavailable For Legal Reasons (RFC 7725)
A server operator has received a legal demand to deny access to a resource or to a set of resources
that includes the requested resource.[59] The code 451 was chosen as a reference to the novel
Fahrenheit 451 (see the Acknowledgements in the RFC).
5xx Server errors
The server failed to fulfil a request.[60]
Response status codes beginning with the digit "5" indicate cases in which the server is aware that it
has encountered an error or is otherwise incapable of performing the request. Except when responding
to a HEAD request, the server should include an entity containing an explanation of the error situation,
and indicate whether it is a temporary or permanent condition. Likewise, user agents should display
any included entity to the user. These response codes are applicable to any request method.[61]
500 Internal Server Error
A generic error message, given when an unexpected condition was encountered and no more
specific message is suitable.[62]
501 Not Implemented
The server either does not recognize the request method, or it lacks the ability to fulfil the
request. Usually this implies future availability (e.g., a new feature of a web-service API).[63]
502 Bad Gateway
The server was acting as a gateway or proxy and received an invalid response from the upstream
server.[64]
503 Service Unavailable
The server is currently unavailable (because it is overloaded or down for maintenance).
Generally, this is a temporary state.[65]
504 Gateway Timeout
The server was acting as a gateway or proxy and did not receive a timely response from the
upstream server.[66]
505 HTTP Version Not Supported
The server does not support the HTTP protocol version used in the request.[67]
506 Variant Also Negotiates (RFC 2295)
Transparent content negotiation for the request results in a circular reference.[68]
507 Insufficient Storage (WebDAV; RFC 4918)
The server is unable to store the representation needed to complete the request.[17]
508 Loop Detected (WebDAV; RFC 5842)
The server detected an infinite loop while processing the request (sent instead of 208 Already
Reported).
510 Not Extended (RFC 2774)
Further extensions to the request are required for the server to fulfil it.[69]
511 Network Authentication Required (RFC 6585)
The client needs to authenticate to gain network access. Intended for use by intercepting proxies
used to control access to the network (e.g., "captive portals" used to require agreement to Terms
of Service before granting full Internet access via a Wi-Fi hotspot).[58]
Unofficial codes
The following codes are not specified by any standard.
103 Checkpoint
Used in the resumable requests proposal to resume aborted PUT or POST requests.[70]
218 This is fine (Apache Web Server)
Used as a catch-all error condition for allowing response bodies to flow through Apache when
ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies
that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a
generic response or a custom response specified by the ErrorDocument directive.[71]
419 Page Expired (Laravel Framework)
Used by the Laravel Framework when a CSRF Token is missing or expired.
420 Method Failure (Spring Framework)
A deprecated response used by the Spring Framework when a method has failed.[72]
420 Enhance Your Calm (Twitter)
Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited;
versions 1.1 and later use the 429 Too Many Requests response code instead.[73]
450 Blocked by Windows Parental Controls (Microsoft)
The Microsoft extension code indicated when Windows Parental Controls are turned on and are
blocking access to the requested webpage.[74]
498 Invalid Token (Esri)
Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.[75]
499 Token Required (Esri)
Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not
submitted.[75]
509 Bandwidth Limit Exceeded (Apache Web Server/cPanel)
The server has exceeded the bandwidth specified by the server administrator; this is often used by
shared hosting providers to limit the bandwidth of customers.[76]
526 Invalid SSL Certificate
Used by Cloudflare and Cloud Foundry's gorouter to indicate failure to validate the SSL/TLS
certificate that the origin server presented.
530 Site is frozen
Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.[77]
598 (Informal convention) Network read timeout error
Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front
of the proxy.[78]
Internet Information Services
Microsoft's Internet Information Services web server expands the 4xx error space to signal errors with
the client's request.
440 Login Time-out
The client's session has expired and must log in again.[79]
449 Retry With
The server cannot honour the request because the user has not provided the required information.
[80]
451 Redirect
Used in Exchange ActiveSync when either a more efficient server is available or the server
cannot access the users' mailbox.[81] The client is expected to re-run the HTTP AutoDiscover
operation to find a more appropriate server.[82]
nginx
The nginx web server software expands the 4xx error space to signal issues with the client's request.
[83][84]
444 No Response
Used internally[85] to instruct the server to return no information to the client and close the
connection immediately.
494 Request header too large
Client sent too large request or too long header line.
495 SSL Certificate Error
An expansion of the 400 Bad Request response code, used when the client has provided an
invalid client certificate.
496 SSL Certificate Required
An expansion of the 400 Bad Request response code, used when a client certificate is required
but not provided.
497 HTTP Request Sent to HTTPS Port
An expansion of the 400 Bad Request response code, used when the client has made a HTTP
request to a port listening for HTTPS requests.
499 Client Closed Request
Used when the client has closed the request before the server could send a response.
Cloudflare
Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin
server.[86]
520 Unknown Error
The 520 error is used as a "catch-all response for when the origin server returns something
unexpected", listing connection resets, large headers, and empty or invalid responses as common
triggers.
521 Web Server Is Down
The origin server has refused the connection from Cloudflare.
522 Connection Timed Out
Cloudflare could not negotiate a TCP handshake with the origin server.
523 Origin Is Unreachable
Cloudflare could not reach the origin server; for example, if the DNS records for the origin server
are incorrect.
524 A Timeout Occurred
Cloudflare was able to complete a TCP connection to the origin server, but did not receive a
timely HTTP response.
525 SSL Handshake Failed
Cloudflare could not negotiate a SSL/TLS handshake with the origin server.
526 Invalid SSL Certificate
Cloudflare could not validate the SSL certificate on the origin web server.
527 Railgun Error
Error 527 indicates that the request timed out or failed after the WAN connection had been
established.[87]
530 Origin DNS Error
Error 530 indicates that the requested host name could not be resolved on the Cloudflare network
to an origin server.[88]
	");
*/
/*
}
*/
/*function wikipediareferenceDecember14th2019_AlertMessage1() {
	alert("Wikipedia source 12.14.2019\nList of HTTP status codes\nThis is a list of Hypertext Transfer Protocol (HTTP) response status codes. Status codes are issued by a server in response to a client's request made to the server. It includes codes from IETF Request for Comments (RFCs), other specifications, and some additional codes used in some common applications of the Hypertext Transfer Protocol (HTTP). The first digit of the status code specifies one of five standard classes of responses. The message phrases shown are typical, but any human-readable alternative may be provided. Unless otherwise stated, the status code is part of the HTTP/1.1 standard (RFC 7231).[1] The Internet Assigned Numbers Authority (IANA) maintains the official registry of HTTP status codes.[2] Microsoft Internet Information Services (IIS) sometimes uses additional decimal sub-codes for more specific information,[3] however these sub-codes only appear in the response payload and in documentation, not in the place of an actual HTTP status code. All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard:\n1xx informational response – the request was received, continuing process\n2xx successful – the request was successfully received, understood and accepted\n3xx redirection – further action needs to be taken in order to complete the request\n4xx client error – the request contains bad syntax or cannot be fulfilled\n5xx server error – the server failed to fulfill an apparently valid request\nContents\n1xx Informational response\n2xx Success\n3xx Redirection\n4xx Client errors\n5xx Server errors\nUnofficial codes\nInternet Information Services\nnginx\nCloudflare\nAWS Elastic Load Balancer\nSee also\nNotes\nReferences\nExternal links\n1xx Informational response\nAn informational response indicates that the request was received and understood. It is issued on a provisional basis while request processing continues. It alerts the client to wait for a final response. The message consists only of the status line and optional header fields, and is terminated by an empty line. As the HTTP/1.0 standard did not define any 1xx status codes, servers must not[note 1] send a 1xx response to an HTTP/1.0 compliant client except under experimental conditions.[4]\n
*/
/*
100 Continue
The server has received the request headers and the client should proceed to send the
request body (in the case of a request for which a body needs to be sent; for example, a
POST request). Sending a large request body to a server after a request has been
rejected for inappropriate headers would be inefficient. To have a server check the
request's headers, a client must send Expect: 100-continue as a header in its initial
request and receive a 100 Continue status code in response before sending the body. If
the client receives an error code such as 403 (Forbidden) or 405 (Method Not Allowed)
then it shouldn't send the request's body. The response 417 Expectation Failed indicates
that the request should be repeated without the Expect header as it indicates that the
server doesn't support expectations (this is the case, for example, of HTTP/1.0 servers).[5]
101 Switching Protocols
The requester has asked the server to switch protocols and the server has agreed to do
so.[6]
102 Processing (WebDAV; RFC 2518)
A WebDAV request may contain many sub-requests involving file operations, requiring a
long time to complete the request. This code indicates that the server has received and is
processing the request, but no response is available yet.[7] This prevents the client from
timing out and assuming the request was lost.
103 Early Hints (RFC 8297)
Used to return some response headers before final HTTP message.[8]
2xx Success
This class of status codes indicates the action requested by the client was received, understood and
accepted.[2]
200 OK
Standard response for successful HTTP requests. The actual response will depend on the
request method used. In a GET request, the response will contain an entity corresponding
to the requested resource. In a POST request, the response will contain an entity
describing or containing the result of the action.[9]
201 Created
The request has been fulfilled, resulting in the creation of a new resource.[10]
202 Accepted
The request has been accepted for processing, but the processing has not been
completed. The request might or might not be eventually acted upon, and may be
disallowed when processing occurs.[11]
203 Non-Authoritative Information (since HTTP/1.1)
The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from
its origin, but is returning a modified version of the origin's response.[12][13]
204 No Content
The server successfully processed the request and is not returning any content.[14]
205 Reset Content
The server successfully processed the request, but is not returning any content. Unlike a
204 response, this response requires that the requester reset the document view.[15]
206 Partial Content (RFC 7233)
The server is delivering only part of the resource (byte serving) due to a range header
sent by the client. The range header is used by HTTP clients to enable resuming of
interrupted downloads, or split a download into multiple simultaneous streams.[16]
207 Multi-Status (WebDAV; RFC 4918)
The message body that follows is by default an XML message and can contain a number
of separate response codes, depending on how many sub-requests were made.[17]
208 Already Reported (WebDAV; RFC 5842)
The members of a DAV binding have already been enumerated in a preceding part of the
(multistatus) response, and are not being included again.
226 IM Used (RFC 3229)
The server has fulfilled a request for the resource, and the response is a representation of
the result of one or more instance-manipulations applied to the current instance.[18]
3xx Redirection
This class of status code indicates the client must take additional action to complete the request. Many of
these status codes are used in URL redirection.[2]
A user agent may carry out the additional action with no user interaction only if the method used in the
second request is GET or HEAD. A user agent may automatically redirect a request. A user agent should
detect and intervene to prevent cyclical redirects.[19]
300 Multiple Choices
Indicates multiple options for the resource from which the client may choose (via agent-
driven content negotiation). For example, this code could be used to present multiple
video format options, to list files with different filename extensions, or to suggest word-
sense disambiguation.[20]
301 Moved Permanently
This and all future requests should be directed to the given URI.[21]
302 Found (Previously "Moved temporarily")
Tells the client to look at (browse to) another URL. 302 has been superseded by 303 and
307. This is an example of industry practice contradicting the standard. The HTTP/1.0
specification (RFC 1945) required the client to perform a temporary redirect (the original
describing phrase was "Moved Temporarily"),[22] but popular browsers implemented 302
with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303
and 307 to distinguish between the two behaviours.[23] However, some Web applications
and frameworks use the 302 status code as if it were the 303.[24]
303 See Other (since HTTP/1.1)
The response to the request can be found under another URI using the GET method.
When received in response to a POST (or PUT/DELETE), the client should presume that
the server has received the data and should issue a new GET request to the given
URI.[25]
304 Not Modified (RFC 7232)
Indicates that the resource has not been modified since the version specified by the
request headers If-Modified-Since or If-None-Match. In such case, there is no need to
retransmit the resource since the client still has a previously-downloaded copy.[26]
305 Use Proxy (since HTTP/1.1)
The requested resource is available only through a proxy, the address for which is
provided in the response. For security reasons, many HTTP clients (such as Mozilla
Firefox and Internet Explorer) do not obey this status code.[27]
306 Switch Proxy
No longer used. Originally meant "Subsequent requests should use the specified
proxy."[28]
307 Temporary Redirect (since HTTP/1.1)
In this case, the request should be repeated with another URI; however, future requests
should still use the original URI. In contrast to how 302 was historically implemented, the
request method is not allowed to be changed when reissuing the original request. For
example, a POST request should be repeated using another POST request.[29]
308 Permanent Redirect (RFC 7538)
The request and all future requests should be repeated using another URI. 307 and 308
parallel the behaviors of 302 and 301, but do not allow the HTTP method to change. So,
for example, submitting a form to a permanently redirected resource may continue
smoothly.[30]
4xx Client errors
This class of status code is intended for situations in which the
error seems to have been caused by the client. Except when
responding to a HEAD request, the server should include an
entity containing an explanation of the error situation, and
whether it is a temporary or permanent condition. These status
codes are applicable to any request method. User agents should
display any included entity to the user.[31]
400 Bad Request
404 error on Wikipedia
The server cannot or will not process the request due
to an apparent client error (e.g., malformed request
syntax, size too large, invalid request message
framing, or deceptive request routing).[32]
401 Unauthorized (RFC 7235)
Similar to 403 Forbidden, but specifically for use when authentication is required and has
failed or has not yet been provided. The response must include a WWW-Authenticate
header field containing a challenge applicable to the requested resource. See Basic
access authentication and Digest access authentication.[33] 401 semantically means
"unauthorised",[34] the user does not have valid authentication credentials for the target
resource.
Note: Some sites incorrectly issue HTTP 401 when an IP address is banned from the
website (usually the website domain) and that specific address is refused permission to
access a website.
402 Payment Required
Reserved for future use. The original intention was that this code might be used as part of
some form of digital cash or micropayment scheme, as proposed, for example, by GNU
Taler,[35] but that has not yet happened, and this code is not usually used. Google
Developers API uses this status if a particular developer has exceeded the daily limit on
requests.[36] Sipgate uses this code if an account does not have sufficient funds to start a
call.[37] Shopify uses this code when the store has not paid their fees and is temporarily
disabled.[38] Stripe uses this code for failed payments where parameters were correct, for
example blocked fraudulent payments.[39]
403 Forbidden
The request contained valid data and was understood by the server, but the server is
refusing action. This may be due to the user not having the necessary permissions for a
resource or needing an account of some sort, or attempting a prohibited action (e.g.
creating a duplicate record where only one is allowed). This code is also typically used if
the request provided authentication via the WWW-Authenticate header field, but the
server did not accept that authentication. The request should not be repeated.
404 Not Found
The requested resource could not be found but may be available in the future.
Subsequent requests by the client are permissible.
405 Method Not Allowed
A request method is not supported for the requested resource; for example, a GET
request on a form that requires data to be presented via POST, or a PUT request on a
read-only resource.
406 Not Acceptable
The requested resource is capable of generating only content not acceptable according to
the Accept headers sent in the request.[40] See Content negotiation.
407 Proxy Authentication Required (RFC 7235)
The client must first authenticate itself with the proxy.[41]
408 Request Timeout
The server timed out waiting for the request. According to HTTP specifications: "The
client did not produce a request within the time that the server was prepared to wait. The
client MAY repeat the request without modifications at any later time."[42]
409 Conflict
Indicates that the request could not be processed because of conflict in the current state
of the resource, such as an edit conflict between multiple simultaneous updates.
410 Gone
Indicates that the resource requested is no longer available and will not be available
again. This should be used when a resource has been intentionally removed and the
resource should be purged. Upon receiving a 410 status code, the client should not
request the resource in the future. Clients such as search engines should remove the
resource from their indices.[43] Most use cases do not require clients and search engines
to purge the resource, and a "404 Not Found" may be used instead.
411 Length Required
The request did not specify the length of its content, which is required by the requested
resource.[44]
412 Precondition Failed (RFC 7232)
The server does not meet one of the preconditions that the requester put on the request
header fields.[45][46]
413 Payload Too Large (RFC 7231)
The request is larger than the server is willing or able to process. Previously called
"Request Entity Too Large".[47]
414 URI Too Long (RFC 7231)
The URI provided was too long for the server to process. Often the result of too much
data being encoded as a query-string of a GET request, in which case it should be
converted to a POST request.[48] Called "Request-URI Too Long" previously.[49]
415 Unsupported Media Type (RFC 7231)
The request entity has a media type which the server or resource does not support. For
example, the client uploads an image as image/svg+xml, but the server requires that
images use a different format.[50]
416 Range Not Satisfiable (RFC 7233)
The client has asked for a portion of the file (byte serving), but the server cannot supply
that portion. For example, if the client asked for a part of the file that lies beyond the end
of the file.[51] Called "Requested Range Not Satisfiable" previously.[52]
417 Expectation Failed
The server cannot meet the requirements of the Expect request-header field.[53]
418 I'm a teapot (RFC 2324, RFC 7168)
This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC
2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by
actual HTTP servers. The RFC specifies this code should be returned by teapots
requested to brew coffee.[54] This HTTP status is used as an Easter egg in some
websites, including Google.com. [55][56]
421 Misdirected Request (RFC 7540)
The request was directed at a server that is not able to produce a response[57] (for
example because of connection reuse).[58]
422 Unprocessable Entity (WebDAV; RFC 4918)
The request was well-formed but was unable to be followed due to semantic errors.[17]
423 Locked (WebDAV; RFC 4918)
The resource that is being accessed is locked.[17]
424 Failed Dependency (WebDAV; RFC 4918)
The request failed because it depended on another request and that request failed (e.g., a
PROPPATCH).[17]
425 Too Early (RFC 8470)
Indicates that the server is unwilling to risk processing a request that might be replayed.
426 Upgrade Required
The client should switch to a different protocol such as TLS/1.0, given in the Upgrade
header field.[59]
428 Precondition Required (RFC 6585)
The origin server requires the request to be conditional. Intended to prevent the 'lost
update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to
the server, when meanwhile a third party has modified the state on the server, leading to a
conflict.[60]
429 Too Many Requests (RFC 6585)
The user has sent too many requests in a given amount of time. Intended for use with
rate-limiting schemes.[60]
431 Request Header Fields Too Large (RFC 6585)
The server is unwilling to process the request because either an individual header field, or
all the header fields collectively, are too large.[60]
451 Unavailable For Legal Reasons (RFC 7725)
A server operator has received a legal demand to deny access to a resource or to a set of
resources that includes the requested resource.[61] The code 451 was chosen as a
reference to the novel Fahrenheit 451 (see the Acknowledgements in the RFC).
5xx Server errors
The server failed to fulfill a request.[62]
Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has
encountered an error or is otherwise incapable of performing the request. Except when responding to a
HEAD request, the server should include an entity containing an explanation of the error situation, and
indicate whether it is a temporary or permanent condition. Likewise, user agents should display any
included entity to the user. These response codes are applicable to any request method.[63]
500 Internal Server Error
A generic error message, given when an unexpected condition was encountered and no
more specific message is suitable.[64]
501 Not Implemented
The server either does not recognize the request method, or it lacks the ability to fulfil the
request. Usually this implies future availability (e.g., a new feature of a web-service
API).[65]
502 Bad Gateway
The server was acting as a gateway or proxy and received an invalid response from the
upstream server.[66]
503 Service Unavailable
The server cannot handle the request (because it is overloaded or down for
maintenance). Generally, this is a temporary state.[67]
504 Gateway Timeout
The server was acting as a gateway or proxy and did not receive a timely response from
the upstream server.[68]
505 HTTP Version Not Supported
The server does not support the HTTP protocol version used in the request.[69]
506 Variant Also Negotiates (RFC 2295)
Transparent content negotiation for the request results in a circular reference.[70]
507 Insufficient Storage (WebDAV; RFC 4918)
The server is unable to store the representation needed to complete the request.[17]
508 Loop Detected (WebDAV; RFC 5842)
The server detected an infinite loop while processing the request (sent instead of 208
Already Reported).
510 Not Extended (RFC 2774)
Further extensions to the request are required for the server to fulfil it.[71]
511 Network Authentication Required (RFC 6585)
The client needs to authenticate to gain network access. Intended for use by intercepting
proxies used to control access to the network (e.g., "captive portals" used to require
agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).[60]
Unofficial codes
The following codes are not specified by any standard.
103 Checkpoint
Used in the resumable requests proposal to resume aborted PUT or POST requests.[72]
218 This is fine (Apache Web Server)
Used as a catch-all error condition for allowing response bodies to flow through Apache
when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache,
response bodies that contain a status code of 4xx or 5xx are automatically discarded by
Apache in favor of a generic response or a custom response specified by the
ErrorDocument directive.[73]
419 Page Expired (Laravel Framework)
Used by the Laravel Framework when a CSRF Token is missing or expired.
420 Method Failure (Spring Framework)
A deprecated response used by the Spring Framework when a method has failed.[74]
420 Enhance Your Calm (Twitter)
Returned by version 1 of the Twitter Search and Trends API when the client is being rate
limited; versions 1.1 and later use the 429 Too Many Requests response code instead.[75]
430 Request Header Fields Too Large (Shopify)
Used by Shopify, instead of the 429 Too Many Requests response code, when too many
URLs are requested within a certain time frame.[76]
450 Blocked by Windows Parental Controls (Microsoft)
The Microsoft extension code indicated when Windows Parental Controls are turned on
and are blocking access to the requested webpage.[77]
498 Invalid Token (Esri)
Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid
token.[78]
499 Token Required (Esri)
Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not
submitted.[78]
509 Bandwidth Limit Exceeded (Apache Web Server/cPanel)
The server has exceeded the bandwidth specified by the server administrator; this is often
used by shared hosting providers to limit the bandwidth of customers.[79]
526 Invalid SSL Certificate
Used by Cloudflare and Cloud Foundry's gorouter to indicate failure to validate the
SSL/TLS certificate that the origin server presented.
529 Site is overloaded
Used by Qualys in the SSLLabs server testing API to signal that the site can't process the
request.[80]
530 Site is frozen
Used by the Pantheon web platform to indicate a site that has been frozen due to
inactivity.[81]
598 (Informal convention) Network read timeout error
Used by some HTTP proxies to signal a network read timeout behind the proxy to a client
in front of the proxy.[82]
Internet Information Services
Microsoft's Internet Information Services web server expands the 4xx error space to signal errors with the
client's request.
440 Login Time-out
The client's session has expired and must log in again.[83]
449 Retry With
The server cannot honour the request because the user has not provided the required
information.[84]
451 Redirect
Used in Exchange ActiveSync when either a more efficient server is available or the
server cannot access the users' mailbox.[85] The client is expected to re-run the HTTP
AutoDiscover operation to find a more appropriate server.[86]
nginx
The nginx web server software expands the 4xx error space to signal issues with the client's
request.[87][88]
444 No Response
Used internally[89] to instruct the server to return no information to the client and close the
connection immediately.
494 Request header too large
Client sent too large request or too long header line.
495 SSL Certificate Error
An expansion of the 400 Bad Request response code, used when the client has provided
an invalid client certificate.
496 SSL Certificate Required
An expansion of the 400 Bad Request response code, used when a client certificate is
required but not provided.
497 HTTP Request Sent to HTTPS Port
An expansion of the 400 Bad Request response code, used when the client has made a
HTTP request to a port listening for HTTPS requests.
499 Client Closed Request
Used when the client has closed the request before the server could send a response.
Cloudflare
Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin
server.[90]
520 Web Server Returned an Unknown Error
The origin server returned an empty, unknown, or unexplained response to Cloudflare.[91]
521 Web Server Is Down
The origin server has refused the connection from Cloudflare.
522 Connection Timed Out
Cloudflare could not negotiate a TCP handshake with the origin server.
523 Origin Is Unreachable
Cloudflare could not reach the origin server; for example, if the DNS records for the origin
server are incorrect.
524 A Timeout Occurred
Cloudflare was able to complete a TCP connection to the origin server, but did not receive
a timely HTTP response.
525 SSL Handshake Failed
Cloudflare could not negotiate a SSL/TLS handshake with the origin server.
526 Invalid SSL Certificate
Cloudflare could not validate the SSL certificate on the origin web server.
527 Railgun Error
Error 527 indicates an interrupted connection between Cloudflare and the origin server's
Railgun server.[92]
530
Error 530 is returned along with a 1xxx error.[93]
AWS Elastic Load Balancer
Amazon's Elastic Load Balancing adds a few custom 4xx return codes
460
Client closed the connection with the load balancer before the idle timeout period elapsed. Typically
when client timeout is sooner than the Elastic Load Balancer's timeout.[94]
463
The load balancer received an X-Forwarded-For request header with more than 30 IP addresses.

	");
*/
/*
}
*/
// More functions for the rest of the messages go here
// Script version: 3 (December 23rd 2019)
// End of script