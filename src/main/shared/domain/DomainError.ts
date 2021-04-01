export abstract class DomainError extends Error {
    abstract errorCode(): string;

    abstract errorMessage(): string;
}
