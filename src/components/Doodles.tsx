type DoodleProps = {
  className?: string;
};

export function ArrowDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 90 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 8C24 10 52 22 78 40"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M56 36C64 37 72 39 79 41C76 34 74 27 73 20"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 160 70"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 8C18 12 6 26 8 38C10 52 34 62 76 63C118 64 152 54 152 38C152 22 122 8 80 7C60 6.5 46 9 40 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 6L11 16L8 26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 4L20 16L17 28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M28 8L30 17L27 26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
