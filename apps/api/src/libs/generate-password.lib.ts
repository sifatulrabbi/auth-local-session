import bcrypt from 'bcrypt';

export async function generatePassword(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, 12);

  return hash;
}
