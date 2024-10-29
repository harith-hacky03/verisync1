// wasmUtils.js
import init, { get_pass_hash } from '../pkg/zk_wasm.js';

export const initializeWasm = async () => {
  await init();
};

export const hashPassword = (password) => {
  return get_pass_hash(password);
};
