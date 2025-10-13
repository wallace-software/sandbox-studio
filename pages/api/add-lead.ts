import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const name = request.query.name as string;
    const email = request.query.email as string;
    const message = (request.query.message as string) || null;
    const budgetRange = (request.query.budgetRange as string) || null;

    // Only name and email are required
    if (!name || !email) {
      return response.status(400).json({ error: 'Name and email are required.' });
    }

    await sql`
      INSERT INTO Leads (Name, Email, Message, BudgetRange) 
      VALUES (${name}, ${email}, ${message}, ${budgetRange});
    `;
  } catch (error) {
    return response.status(500).json({ error: (error as Error).message });
  }

  const leads = await sql`SELECT * FROM Leads;`;
  return response.status(200).json({ leads });
}
