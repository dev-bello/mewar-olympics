import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { fixturesData, resultsData } from "@/lib/fixtures-data";
import { FootballTable } from "./football-table";

export function FixturesToolbar() {
  return (
    <div>
      <Tabs defaultValue="fixtures">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
        </TabsList>
        <TabsContent value="fixtures">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fixturesData.map((fixture, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-bold text-blue-500">{fixture.sport}</h3>
                <p>
                  {fixture.teamA} vs {fixture.teamB}
                </p>
                <p>{new Date(fixture.date).toLocaleString()}</p>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="results">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resultsData.map((result, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-bold">{result.sport}</h3>
                <p>
                  {result.teamA} vs {result.teamB}
                </p>
                <p>Score: {result.score}</p>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="table" className="overflow-x-auto">
          <FootballTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
