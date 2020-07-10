const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

let domain;

if (isLocalhost) {
    // This is running on localhost. Lets check if a service worker still exists or not.
    domain = "http://localhost:5000";
} else {
    // Is not local host. Just register service worker
    domain = ""
}

export default domain;