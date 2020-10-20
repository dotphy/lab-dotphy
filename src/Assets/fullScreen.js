import * as React from "react";

function SvgFullScreen(props) {
  return (
    <svg height={512} viewBox="0 0 482.239 482.239" width={512} {...props}>
      <path d="M0 17.223v120.56h34.446V34.446h103.337V0H17.223C7.703 0 0 7.703 0 17.223zM465.016 0h-120.56v34.446h103.337v103.337h34.446V17.223c0-9.52-7.703-17.223-17.223-17.223zM447.793 447.793H344.456v34.446h120.56c9.52 0 17.223-7.703 17.223-17.223v-120.56h-34.446zM34.446 344.456H0v120.56c0 9.52 7.703 17.223 17.223 17.223h120.56v-34.446H34.446z" />
    </svg>
  );
}

export default SvgFullScreen;
