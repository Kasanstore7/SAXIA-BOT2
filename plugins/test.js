let handler = async (m, { conn }) => {
  const t = `*[[=>.........]] 10%*`;
  const e = `*[[==>........]] 20%*`;
  const x = `*[[====>......]] 40%*`;
  const te = `*[[=====>.....]] 50%*`;
  const ee = `*[[========>...]] 80%*`;
  const ex = `*[[=========>.]] 90%*`;
  const et = `*[[===========]] 100%*`;
  const fin = '```completed```';
  const { key: k } = await conn.sendMessage(m.chat, { text: "wait..."});
  await conn.sendMessage(m.chat, { text: t, edit: k});
  await conn.sendMessage(m.chat, { text: e, edit: k});
  await conn.sendMessage(m.chat, { text: x, edit: k});
  await conn.sendMessage(m.chat, { text: te, edit: k});
  await conn.sendMessage(m.chat, { text: ee, edit: k});
  await conn.sendMessage(m.chat, { text: ex, edit: k});
  await conn.sendMessage(m.chat, { text: et, edit: k });
  await conn.sendMessage(m.chat, { text: fin, edit: k});
};

handler.command = ['edit'];

export default handler;