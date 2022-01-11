let nock = require('nock');

module.exports.hash = "2d17776248a6b03730757de132d13649";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'd520a97a-ddb7-43bb-9fc5-d3d747d50200',
  'x-ms-ests-server',
  '2.1.12261.17 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AqLfLOFke19ClAJ_zqnTdiU; expires=Sat, 05-Feb-2022 03:01:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrwq3mFGMB9byJcnHMGESz7ro_3wXkJJoUmIW10WjmgCXKJiM-bRWUKkfd2two3jhwcECNUPlvooqX2k9LczbsIr-PELQRXzWiJPOWmOeYq81ot8NGvEslha2g-IuCWG5o1VDlBk88Sec1W5hiVif46MaD0kx-lKweAoH8TUmgt7EgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 06 Jan 2022 03:01:10 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'c11f8f9a-6879-4d56-8cc3-1fb27ce68400',
  'x-ms-ests-server',
  '2.1.12261.17 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AtKOtoa3QRlJq_uxktCnNUo; expires=Sat, 05-Feb-2022 03:01:11 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrT0NdByZ9u3_7KCXq-E6SlpbqbtrCC7DTAZ8D5ocVIQnNgbZL65yU-R03Yc8zrwrNcKPAbj8xs4f3NqelrVtyGg4IAiRqVbaJWh_Z5iZ8oBqYwO7-g6Mm_Epx9vN2kroSgXw5c4N8PnKhEeAE86ffpHsaYDzIbB-hP91jJZxKiR4gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 06 Jan 2022 03:01:10 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.4.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=0c91b555-66c0-4909-9f27-599fe92d1383&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '9dd0c33e-2a73-4b99-a0e0-506faa8c8300',
  'x-ms-ests-server',
  '2.1.12261.17 - KRSLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AkMc0sIhwThNs9qa1vm30v3Lj78gAQAAAHZSaNkOAAAA; expires=Sat, 05-Feb-2022 03:01:11 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 06 Jan 2022 03:01:10 GMT',
  'Content-Length',
  '1393'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/mymsiaaa', {"location":"eastus"})
  .query(true)
  .reply(201, {"id":"/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/mymsiaaa","name":"mymsiaaa","type":"Microsoft.ManagedIdentity/userAssignedIdentities","location":"eastus","tags":{},"properties":{"tenantId":"88888888-8888-8888-8888-888888888888","principalId":"1fd4c4d5-1c5c-41c6-8010-01776c52c7ec","clientId":"b62fef0e-e59f-46aa-a612-7f98abcd5825"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '426',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  '/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/mymsiaaa',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1199',
  'x-ms-request-id',
  'd676bc2b-ae6f-4f3f-9f12-35a493d2b944',
  'x-ms-correlation-request-id',
  'd676bc2b-ae6f-4f3f-9f12-35a493d2b944',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030119Z:d676bc2b-ae6f-4f3f-9f12-35a493d2b944',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:18 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/disks/mydiskaaa', {"location":"eastus","properties":{"creationData":{"createOption":"Empty"},"diskSizeGB":200}})
  .query(true)
  .reply(202, {"name":"mydiskaaa","location":"eastus","properties":{"creationData":{"createOption":"Empty"},"diskSizeGB":200,"provisioningState":"Updating","isArmResource":true}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '228',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/DiskOperations/9db13725-9034-4244-818b-555eeaf07c79?p=46f2ba6c-4ad8-4d14-a912-d9914b2fcabd&monitor=true&api-version=2021-04-01',
  'Retry-After',
  '0',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/DiskOperations/9db13725-9034-4244-818b-555eeaf07c79?p=46f2ba6c-4ad8-4d14-a912-d9914b2fcabd&api-version=2021-04-01',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/CreateUpdateDisks3Min;999,Microsoft.Compute/CreateUpdateDisks30Min;7998',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-served-by',
  '46f2ba6c-4ad8-4d14-a912-d9914b2fcabd_132720953397422156',
  'x-ms-request-id',
  '9db13725-9034-4244-818b-555eeaf07c79',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1198',
  'x-ms-correlation-request-id',
  'd1526c97-f4cc-4808-bb5f-54263f1f021b',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030122Z:d1526c97-f4cc-4808-bb5f-54263f1f021b',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:21 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/DiskOperations/9db13725-9034-4244-818b-555eeaf07c79')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bd5ed9b62917ff428fd686f676f6f7b67777be7d3373bf71eedec3edadb1bef1eec3eb87fb0fbc9cecea39d9d8f46fc52be9c6d7ae5decea70feedffb347885fa69d70dde78bd9e4ef37c96cff49b555dadf2ba2d727ccb48d187d5ba5dad5bf3c147cb4c7a5b5ccf8ae66d9665fa6e31c3a7779bf5a499d6c5aa2daa6573f7e1def9c3fbb383f3ed7bd34f1f6cefefeeed6f3fdc9d3ed83e989eef3c98ce26e77bfbbb77ebbca9d6f534ffbcaed6abe6eee2faa79b366fdabb84cd6531cbebe6ee17c5b4ae9aeabc1d9f540b4226bf8bbed1143f1d0eedf58a711b68afadca6a9a013db4ccb306b4902f9ab76bfa8c87497f9981be6eb3e52cab67bffff357afa5217d4934aafd2f3fc2e7bf84bf8d53715ae7dce9d3accddcc7e68bfc4b26187df1d1e962d55e333803901a01fdd7c50ff2cf9f5093bd9d1dfff3b32f5fbe7e9567b3efd6450b84ef875f7ff164d5f85f7f6abfcd97d3fadaf4eb1032443cb55f1fb7af683ebe5bb4f39765d69e57f5e2f7ca7b282ef3f6aaaadf1e134735cdcbaa2ca6d780725c96d515fd6329b75a4fe8bb177e6bb43b5d6693d23022356b89a94f9834cc5731dede7df8e0dec1a78138d08b44fdcba221ac8be505cd0e8fb9cbe8d40ca4b15f7fb5ccda369bcebbdf13c59f5c132f529bbdddfd07fb07f73edd3f70e45d2f8b5fb4cecf18c1f3fdbde9839dddd9f683d9cec1f67ebe4b4cbe439cfef0e0e1eeeefd6cefd3fdfc8049f64b7ee384fe473f198ae5b287b3c9eebd077bf7b71feedcdbdfdedfdbdfdf3ed83d986cdfbf7f3fcf3348cb8387f4fe2f","f97f008b2eb3cd2b040000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/GetOperation3Min;49999,Microsoft.Compute/GetOperation30Min;399984',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-served-by',
  '46f2ba6c-4ad8-4d14-a912-d9914b2fcabd_132720953397422156',
  'x-ms-request-id',
  'e9cdb340-5f68-4d55-a52e-649aa57acd11',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11999',
  'x-ms-correlation-request-id',
  '33c16b83-87f4-4d88-9300-ca85e4df03ca',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030122Z:33c16b83-87f4-4d88-9300-ca85e4df03ca',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:21 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/disks/mydiskaaa')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e947cb6c917ff428fd68713d2b9ab759967d34e2cf8b193ebddbac27cdb42e566d512d9bbb0ff7ce1fde9f1d9c6fdf9b7efa607b7f776f7ffbe1eef4c1f6c1f47ce7c1743639dfdbdfbd5be74db5aea7f9e775b55e357717d73fddb479d3de5dd5d56531cbebe6ee17c5b4ae9aeabc1d9f548bd5bacdefa26f34c54f87437bbd62dc06da6babb29a66400f2df3ac69d7e68be6ed9a3ee361d25f66a0afdb6c39cbead9effffcd56b69485fb6455efb5f7e84cf7f097ffb11e1bdca6b6ad1500b036d5ae7dce9d3accddcc7e68bfc4b26187df1d1e962d55e333803901a01fdd7c50ff2cf9f5093bd9d1dfff3b32f5fbe7e9567b3efd6450b84ef875f7ff164d5f85f7f6abfcd97d3fadaf4eb1032443cb55f1fb7af683ebe5bb4f39765d69e57f5e2f7ca7b282ef3f6aaaadf1e4fa779d3bcacca627a0d28c765595dd13f9672abf584be7be1b746bbd3653629f3996dd6168bfc8449c37cb5b7b3b7b7bdb3bbbdf3e99b9d7b8f76761feded8d771f3eb877f0e9ee273b3b8f7676ec8b44fdcba221ac8be505cd0e8ff9a3d76bea289f112cd30ca4b15f7fb5ccda369bcebbdf13c59f5c132f529bbdddfd07fb07f73edd3f70e45d2f8b5fb4cecf18c1f3fdbde9839dddd9f683d9cec1f67ebe4b4cbe439cfef0e0e1eeeefd6cefd3fdfc8049f64b7ee3e497","fc3ff92787fd4a030000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/LowCostGet3Min;4999,Microsoft.Compute/LowCostGet30Min;39986',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-served-by',
  '46f2ba6c-4ad8-4d14-a912-d9914b2fcabd_132720953397422156',
  'x-ms-request-id',
  '524e7ae8-1590-49f9-bb82-fa52417e5f00',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11998',
  'x-ms-correlation-request-id',
  'd699ceda-1d1f-4495-a7cb-2e968b3cec32',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030125Z:d699ceda-1d1f-4495-a7cb-2e968b3cec32',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:24 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/snapshots/mysnapshotaaa', {"location":"eastus","properties":{"creationData":{"createOption":"Copy","sourceUri":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/disks/mydiskaaa"}}})
  .query(true)
  .reply(202, {"location":"eastus","properties":{"creationData":{"createOption":"Copy","sourceUri":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/disks/mydiskaaa","sourceUniqueId":"f42c701d-7d08-4e17-80c7-989115a264e8"},"publicNetworkAccess":"Enabled","provisioningState":"Updating","isArmResource":true}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '426',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/DiskOperations/b899f8e1-c87c-461b-abd0-27a807883413?p=46f2ba6c-4ad8-4d14-a912-d9914b2fcabd&monitor=true&api-version=2021-04-01',
  'Retry-After',
  '0',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/DiskOperations/b899f8e1-c87c-461b-abd0-27a807883413?p=46f2ba6c-4ad8-4d14-a912-d9914b2fcabd&api-version=2021-04-01',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/HighCostSnapshotCreateHydrate3Min;999,Microsoft.Compute/HighCostSnapshotCreateHydrate30Min;7998',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-served-by',
  '46f2ba6c-4ad8-4d14-a912-d9914b2fcabd_132720953397422156',
  'x-ms-request-id',
  'b899f8e1-c87c-461b-abd0-27a807883413',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1197',
  'x-ms-correlation-request-id',
  '37f01a1c-d5ab-4bca-8f6a-e03a65c95b59',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030128Z:37f01a1c-d5ab-4bca-8f6a-e03a65c95b59',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:27 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/DiskOperations/b899f8e1-c87c-461b-abd0-27a807883413')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bd5ed9b62917ff428fd686f676f6f7b67777be7d3373bf71eedec3eda7b307e786ff7c183fb0f3ed9d979b4b3f3d1c8bcd4ae1bbc71b67c59571775de34fad53213509383870fcf0ff2ddede9c183e9f6fea7bb93ed6c32dbd9de7b901dec3c3838b8b7bf7befa3df38f9","25ff0f6a50c22a86000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/GetOperation3Min;49998,Microsoft.Compute/GetOperation30Min;399983',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-served-by',
  '46f2ba6c-4ad8-4d14-a912-d9914b2fcabd_132720953397422156',
  'x-ms-request-id',
  '139b6b78-e252-4eb1-af54-87792605d55d',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11997',
  'x-ms-correlation-request-id',
  '11bf16f2-92c8-4205-8280-f72f884d6b3f',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030128Z:11bf16f2-92c8-4205-8280-f72f884d6b3f',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:27 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/DiskOperations/b899f8e1-c87c-461b-abd0-27a807883413')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bd5ed9b62917ff428fd686f676f6f7b67777be7d3373bf71eedec3eda7b307e786ff7c183fb0f3ed9d979b4b3f3d1c8bcd4ae1bbc71b67c59571775de34fad53213509383870fcf0ff2ddede9c183e9f6fea7bb93ed6c32dbd9de7b901dec3c3838b8b7bf7befa3df38f9","25ff0f6a50c22a86000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/GetOperation3Min;49997,Microsoft.Compute/GetOperation30Min;399982',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-served-by',
  '46f2ba6c-4ad8-4d14-a912-d9914b2fcabd_132720953397422156',
  'x-ms-request-id',
  'dec43fed-448f-4fda-ad98-6ac8fe25e00c',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11996',
  'x-ms-correlation-request-id',
  'f647653f-8b8e-4bee-88cc-d2e3771626a0',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030128Z:f647653f-8b8e-4bee-88cc-d2e3771626a0',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:27 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/DiskOperations/b899f8e1-c87c-461b-abd0-27a807883413')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bd5ed9b62917ff428fd686f676f6f7b67777be7d3373bf71eedec3eda7b307e786ff7c183fb0f3ed9d979b4b3f3d1885fca97b3e1570ec60f773fddbd7fb01bbc42fdb4eb066fbc5e4fa7793ecb67facdaaae5679dd1639be65a4e8c36addaed6adf9e0a36526bd2dae9b65b66ae6559b6599be5fccf0cddd663d69a675b16a8b6ad9dc7db877fef0feece07cfbdef4d307dbfbbb7bfbdb0f77a70fb60fa6e73b0fa6b3c9f9defeeedd3a6faa753dcd3fafabf5aab9bbb8fee9a6cd9bf62e617459ccf2bab9fb4531adaba63a6fc727d58210caef9afed1dcfcee7069af578ce786f7b465594d33a08ad679d68036f245f3764d9ff1b0e92f33f0d76db69c65f5ecf77ffeeab534a42f8966b5ffe547f8fc97f0b771aa4eeb9c3b7d9ab599fbd87c917fc9c4a32f3e3aa956d7a61bfa5ac8f44ac975f64325f8ac68dea2297e5a42e351acbe5a16bf68ad389defef4d1fececceb61fcc760eb6f7f35dea7f87907878f07077f77eb6f7e97e7ec0443264222880fbbaf841fef91382b0b7b3633ecf97d3fa9a07479f3b4a99193eb55f1fb74498f6bb453b7f5966ed79552f7eaffcbadb4b41cdf345be6cb392de3ecfca26375f2df3f6aaaadf1e935434cdcbaa2ca6d7d4e4a3e3b2acaee81f33e08f56eb097df7c26f8d76a7cb6c521a61a2662d09e6094f2793a42f9f5191a61779121a1a50b1bc208e6a79981d61a5664c2ff3f557cbac6db3e9bcfb3dd1f3c9354d2db5d9dbdd7fb07f70efd3fd0347dbb5376707b3bdfb7bb39d7bdbfbb309cdd9bdece1f6e4d36cb2fd606f6f77763e79b04b23606afe92df38a1ffd14f8662256372f0f0e1f941bebb3d3d7830dddeff7477b29d4d663bdb7b0fb2839d070707f7f677efd1fb","bfe4ff0154b66e63ef040000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/GetOperation3Min;49995,Microsoft.Compute/GetOperation30Min;399980',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-served-by',
  '46f2ba6c-4ad8-4d14-a912-d9914b2fcabd_132720953397422156',
  'x-ms-request-id',
  '18092b83-1e48-457f-9f1b-d45e1f5ca87f',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11995',
  'x-ms-correlation-request-id',
  '1de0e550-721b-4aab-9da5-2d12a094f265',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030129Z:1de0e550-721b-4aab-9da5-2d12a094f265',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:28 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/snapshots/mysnapshotaaa')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e947cb6c917ff428fd6871dd2cb35533afda2ccb3e1af177c50cdfdc6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e4faac56adde6774dff686e7e77b8b4d72bc673c37bdab2aca6195045eb3c6bdab5f9a279bba6cf78d8f49719f8eb365bceb27af6fb3f7ff55a1ad2976d91d7fe971fe1f35fc2df7e446358e535b568a8858136ad73eef469d666ee63f345fe25138fbef8e8a45a5d9b6ee86b21d32b25d7d90f95e0b3a2798ba6f869098d47b1fa6a59fca2b5e274bebf377db0b33bdb7e30db39d8decf77a9ff1d42e2e1c1c3ddddfbd9dea7fbf90113c99089a000eeebe207f9e74f08c2dece8ef93c5f4eeb6b1e1c7dee286566f8d47e7ddc1261daef16edfc6599b5e755bdf8bdf2eb6e2f0535cf17f9b2cd4a7afb3c2b9bdc7cb5ccdbabaa7e7b3c9de64df3b22a8be93535f9e8b82cab2bfac70cf8a3d57a42dfbdf05ba3dde9329b94f9cc366b8b457ec2d3c924d9dbd9dbdbded9dddef9f4cdcebd473bbb8ff61e8c1fdedb7df0e0fe834f76761eedecd81779121a1a50b1bc208e6a7998afd7d4513e2358a619d3cb7cfdd5326bdb6c3aef7e4ff47c724d534b6df676f71fec1fdcfb74ffc0d176edcdd9c16ceffede6ce7def6fe6c4273762f7bb83df9349b6c3fd8dbdb9d9d4f1eecd208989abfe4374e","7ec9ff03d7ec26030e040000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/LowCostGet3Min;4997,Microsoft.Compute/LowCostGet30Min;39984',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-served-by',
  '46f2ba6c-4ad8-4d14-a912-d9914b2fcabd_132720953397422156',
  'x-ms-request-id',
  '21cc13b4-e414-45d8-ac70-f2e9ce1472af',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11994',
  'x-ms-correlation-request-id',
  '76b5bd8b-03e7-4556-8553-744324334ad2',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030129Z:76b5bd8b-03e7-4556-8553-744324334ad2',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:28 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/images/myimagesaaa', {"location":"eastus","properties":{"storageProfile":{"osDisk":{"snapshot":{"id":"subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/snapshots/mysnapshotaaa"},"osType":"Linux","osState":"Generalized"}},"hyperVGeneration":"V1"}})
  .query(true)
  .reply(201, {"name":"myimagesaaa","id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/images/myimagesaaa","type":"Microsoft.Compute/images","location":"eastus","properties":{"storageProfile":{"osDisk":{"osType":"Linux","osState":"Generalized","snapshot":{"id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/snapshots/mysnapshotaaa"},"caching":"None","storageAccountType":"Standard_LRS"},"dataDisks":[]},"provisioningState":"Creating","hyperVGeneration":"V1"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '725',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/operations/a0076468-3b86-43bb-983b-a0e34e471797?p=f8cfeb74-5cf7-40e0-89b1-3d95a1060fe7&api-version=2021-07-01',
  'Azure-AsyncNotification',
  'Enabled',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/CreateImages3Min;39,Microsoft.Compute/CreateImages30Min;198',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'a0076468-3b86-43bb-983b-a0e34e471797',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1196',
  'x-ms-correlation-request-id',
  '5641803d-f857-47d3-a856-f80934b77959',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030132Z:5641803d-f857-47d3-a856-f80934b77959',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:31 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/operations/a0076468-3b86-43bb-983b-a0e34e471797')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bd5ed9b62917ff428fd686f676f6f7b67777be7d3373bf71eedec3ebab73bdedffbf4e1c1fe273b3b8f76763e1a9977da758317ce962febeaa2ce9b46bf5a660229dbd979f0e9fea707dbf726079f6eefdf9b4cb61f1edc9b6c673bf9bdfd7cffc1ee83870f3efa8d935f","f2ff00c592e12585000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/GetOperation3Min;14999,Microsoft.Compute/GetOperation30Min;29989',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'eba83bc3-3d10-4e37-ac03-8381527fb3e5',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11993',
  'x-ms-correlation-request-id',
  '11cc72a2-15b4-4856-8e8f-6499e1e19aac',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030133Z:11cc72a2-15b4-4856-8e8f-6499e1e19aac',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:32 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/operations/a0076468-3b86-43bb-983b-a0e34e471797')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bd5ed9b62917ff428fd686f676f6f7b67777be7d3373bf71eedec3ebab73bdedffbf4e1c1fe273b3b8f76763e1a9977da758317ce962febeaa2ce9b46bf5a660229dbd979f0e9fea707dbf726079f6eefdf9b4cb61f1edc9b6c673bf9bdfd7cffc1ee83870f3efa8d935f","f2ff00c592e12585000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/GetOperation3Min;14998,Microsoft.Compute/GetOperation30Min;29988',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'dd085a05-7f39-4ce0-ba38-5de13fbb8a98',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11992',
  'x-ms-correlation-request-id',
  'de5a6ad2-853e-4ddb-8e8a-1b0f7745adbc',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030136Z:de5a6ad2-853e-4ddb-8e8a-1b0f7745adbc',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:35 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Compute/locations/eastus/operations/a0076468-3b86-43bb-983b-a0e34e471797')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bd5ed9b62917ff428fd686f676f6f7b67777be7d3373bf71eedec3ebab73bdedffbf4e1c1fe273b3b8f76763e1af13bf97236fcc6a7e3fbf73efdf4e1cebde015eaa65d3778e3f57a3acdf3593ed36f969940ca76761e7cbaffe9c1f6bdc9c1a7dbfbf72693ed8707f726dbd94e7e6f3fdf7fb0fbe0e1838f7ee3e497","fc3fd846f2c8b7000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/GetOperation3Min;14997,Microsoft.Compute/GetOperation30Min;29987',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '0b676460-c7fe-4a26-8108-fc6448d95755',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11991',
  'x-ms-correlation-request-id',
  '349d6bac-8440-4a90-aa6b-f9a8e5de9da1',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030138Z:349d6bac-8440-4a90-aa6b-f9a8e5de9da1',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:37 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Compute/images/myimagesaaa')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e947cb6c917ff428fd68715d2cb28bbcc9b2eca3117f53ccf0f9dd663d69a675b16a8b6ad9dc7db877fef0feece07cfbdef4d307dbfbbb7bfbdb0f77a70fb60fa6e73b0fa6b3c9f9defeeedd3a6faa753dcd3fafabf5aab9bbb8fee9a6cd9bf6eeaaae2e8b595e3777bf28a675d554e7edf8a45aacd66d7e577aa7b6f28b43a3bd5e318243af68b3b29a6640114df3ac69d7e60bea7495d76d412d1fa53c66fab069ab9a5e7e5957e74509f0fa057d55354f8be6adff117ff846d1785e2cd7ef04b43cf4ddeb366bf9cbcff3655e6765f1837c16349911c4d7f4e9e74fa8d5dece8eff5db3cc56cdbc6ae91baf47fae2874b7f83069a9bdf31090ea55fe2633dcda6f36279010c5f54cb3c18ad12f7783aadd6cbd6108e88b49c65f5ecf77ffeeab585ea607e34cbda0c94c7347deffbf2b1f91a937859344401ea930009b55fafa7d33c9f395a7f34a7beea9f945900bdd0ea2777b9b75ff21b27bf","e4ff01567b6880f2020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-resource',
  'Microsoft.Compute/GetImages3Min;359,Microsoft.Compute/GetImages30Min;1793',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '024e986a-ebc0-4d69-9d82-6d17098289d4',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11990',
  'x-ms-correlation-request-id',
  'b794df46-43d1-4fbc-a35c-4ddd2aeae1ad',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220106T030140Z:b794df46-43d1-4fbc-a35c-4ddd2aeae1ad',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 06 Jan 2022 03:01:39 GMT'
]);