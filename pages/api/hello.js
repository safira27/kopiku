// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const lokasi =path.join(__dirname+"../../../../../json");
  const dataJson=fs.readFileSync(`${lokasi}/data.json`,{encording:"utf-8"});
  res.status(200).json({ dataJson:JSON.parse(dataJson) })  ;
}
