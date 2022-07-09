export type PrimaryID = string | number;

export type Primary = {
    value: PrimaryID;
};

export function toEqualPrimary(target: Primary, other: Primary): boolean {
    return target.value === other.value;
}
