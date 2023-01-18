
export default function handler(req, res) {
    console.log('CALLED')
    res.status(200).json({
        access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NzQwMTg3NzcsImV4cCI6MTcwNTU1NDc3NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.JcLN4hazXtlmLnFGenOgKfWq8tAQsHXzRn-ndEk7fXA",
        token_type: "bearer",
        id_token: "eyJhbGciOiJIUzI1NiIsImprdSI6Imh0dHBzOi8vbG9jYWxob3N0OjgwODAvdWFhL3Rva2VuX2tleXMiLCJraWQiOiJsZWdhY3ktdG9rZW4ta2V5IiwidHlwIjoiSldUIn0.eyJzdWIiOiI2NDk1NDk5Yy1iNGFhLTRlMTQtODE3MC1mOTM3NGFiYWI4MWUiLCJhdWQiOlsiYXBwIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91YWEvb2F1dGgvdG9rZW4iLCJleHAiOjE2NzA4MTc3NzIsImlhdCI6MTY3MDc3NDU3MiwiYW1yIjpbInB3ZCJdLCJhenAiOiJhcHAiLCJzY29wZSI6WyJvcGVuaWQiXSwiZW1haWwiOiJSMVZyQU1AdGVzdC5vcmciLCJ6aWQiOiJ1YWEiLCJvcmlnaW4iOiJ1YWEiLCJqdGkiOiJhMGZjNGFmMjUyNmU0NmQxODViOWJlODIyODNiZjIzNyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJjbGllbnRfaWQiOiJhcHAiLCJjaWQiOiJhcHAiLCJncmFudF90eXBlIjoicGFzc3dvcmQiLCJ1c2VyX25hbWUiOiJSMVZyQU1AdGVzdC5vcmciLCJyZXZfc2lnIjoiNmZiMzg5ODciLCJhdXRoX3RpbWUiOjE2NzA3NzQ1NzIsInVzZXJfaWQiOiI2NDk1NDk5Yy1iNGFhLTRlMTQtODE3MC1mOTM3NGFiYWI4MWUifQ.-wO0j6qS3U083h54CZTanTQwrqM-1p3qijW6zWzyIog",
        refresh_token: "27c8801cd1b74125836c7934cbffa60c-r",
        expires_in: 43199,
        scope: "scim.userids openid cloud_controller.read password.write cloud_controller.write",
        jti: "a0fc4af2526e46d185b9be82283bf237"
    })
}
