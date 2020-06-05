// Start of script
// HTTP code (in alert boxes)
// 1.x.x range
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
// 2.x.x range
function HTTP200_AlertMessage1() {
	alert("About HTTP 200 -OK\nStandard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.");
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
// Microsoft range

// NGinx range

// Cloudflare range

// Other range

// More functions for the rest of the messages go here
// Script version: 2 (December 20th 2019)
// End of script