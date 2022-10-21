export type TargetType = "2022-10-22T10:00" | "2022-10-22T18:00" | "2022-10-23T9:00" | "2022-10-23T14:00" | "finish";

export type StatusType = "before" | "first" | "middle" | "second" | "finish";

export type OutputType = {
  status: StatusType;
  time?: number;
};

export type CreateTextProps = { status: StatusType };
