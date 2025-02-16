export async function GET() {
    console.log(process.env.API_URL);
    try {
        const response = await fetch(`${process.env.API_URL}/api`);
        const data = await response.text();
        return new Response(data, { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}