const lbToBr = (txt: string) => txt.split(/(\n)/g).map((t) => (t === "\n" ? <br /> : t));

export default lbToBr;
