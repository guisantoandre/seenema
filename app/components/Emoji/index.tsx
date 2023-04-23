"use client";

import React from "react";

type Props = {
   symbol: string;
   label?: string;
};

const Emoji = ({ symbol, label }: Props) => {
   return (
      <span
         className="emoji"
         role="img"
         aria-label={label ? label : ""}
         aria-hidden={label ? "false" : "true"}
      >
         {symbol}
      </span>
   );
};

export default Emoji;
