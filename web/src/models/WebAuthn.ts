export interface PublicKeyCredentialCreationOptionsStatus {
    options?: PublicKeyCredentialCreationOptions;
    status: number;
}

export interface CredentialCreation {
    publicKey: PublicKeyCredentialCreationOptionsJSON;
}

export interface PublicKeyCredentialCreationOptionsJSON
    extends Omit<PublicKeyCredentialCreationOptions, "challenge" | "excludeCredentials" | "user"> {
    challenge: string;
    excludeCredentials?: PublicKeyCredentialDescriptorJSON[];
    user: PublicKeyCredentialUserEntityJSON;
}

export interface PublicKeyCredentialRequestOptionsStatus {
    options?: PublicKeyCredentialRequestOptions;
    status: number;
}

export interface CredentialRequest {
    publicKey: PublicKeyCredentialRequestOptionsJSON;
}

export interface PublicKeyCredentialRequestOptionsJSON
    extends Omit<PublicKeyCredentialRequestOptions, "allowCredentials" | "challenge"> {
    allowCredentials?: PublicKeyCredentialDescriptorJSON[];
    challenge: string;
}

export interface PublicKeyCredentialDescriptorJSON extends Omit<PublicKeyCredentialDescriptor, "id"> {
    id: string;
}

export interface PublicKeyCredentialUserEntityJSON extends Omit<PublicKeyCredentialUserEntity, "id"> {
    id: string;
}

export interface AuthenticatorAssertionResponseJSON
    extends Omit<AuthenticatorAssertionResponse, "authenticatorData" | "clientDataJSON" | "signature" | "userHandle"> {
    authenticatorData: string;
    clientDataJSON: string;
    signature: string;
    userHandle: string;
}

export interface AttestationPublicKeyCredential extends PublicKeyCredential {
    response: AuthenticatorAttestationResponse;
}

export interface AuthenticatorAttestationResponseJSON
    extends Omit<AuthenticatorAttestationResponse, "clientDataJSON" | "attestationObject"> {
    clientDataJSON: string;
    attestationObject: string;
}

export interface AttestationPublicKeyCredentialJSON
    extends Omit<AttestationPublicKeyCredential, "response" | "rawId" | "getClientExtensionResults"> {
    rawId: string;
    response: AuthenticatorAttestationResponseJSON;
    clientExtensionResults: AuthenticationExtensionsClientOutputs;
    transports?: string[];
}

export interface PublicKeyCredentialJSON
    extends Omit<PublicKeyCredential, "rawId" | "response" | "getClientExtensionResults"> {
    rawId: string;
    clientExtensionResults: AuthenticationExtensionsClientOutputs;
    response: AuthenticatorAssertionResponseJSON;
    targetURL?: string;
    workflow?: string;
    workflowID?: string;
}

export enum AttestationResult {
    Success = 1,
    Failure,
    FailureExcluded,
    FailureUserConsent,
    FailureUserVerificationOrResidentKey,
    FailureSyntax,
    FailureSupport,
    FailureUnknown,
    FailureWebAuthnNotSupported,
    FailureToken,
}

export interface AttestationPublicKeyCredentialResult {
    credential?: AttestationPublicKeyCredential;
    result: AttestationResult;
}

export interface AttestationPublicKeyCredentialResultJSON {
    credential?: AttestationPublicKeyCredentialJSON;
    result: AttestationResult;
}

export enum AssertionResult {
    Success = 1,
    Failure,
    FailureUserConsent,
    FailureU2FFacetID,
    FailureSyntax,
    FailureUnknown,
    FailureUnknownSecurity,
    FailureWebAuthnNotSupported,
    FailureChallenge,
}

export interface DiscoverableAssertionResult {
    result: AssertionResult;
    username: string;
}

export interface AssertionPublicKeyCredentialResult {
    credential?: PublicKeyCredential;
    result: AssertionResult;
}

export interface AssertionPublicKeyCredentialResultJSON {
    credential?: PublicKeyCredentialJSON;
    result: AssertionResult;
}
