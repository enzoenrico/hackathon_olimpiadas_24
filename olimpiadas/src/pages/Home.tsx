import { Button } from "../ui/components/ui/button"
import { Card, CardTitle, CardContent, CardFooter, CardHeader } from "../ui/components/ui/card"
import { Event } from "../types/olimpic"

import { useFetch } from "../hooks/fetcher"

const Home = () => {

  const { data, isLoading, error } = useFetch<ApiResponse>()

  const handleDataType = (data: ApiResponse): string | Error => {
    return data.data instanceof Array ? "Array" : "Object"
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }
  return (
    <div>
      <Button variant={"default"} > Click me </Button>
      <p>Data type: {handleDataType(data)}</p>
      {
        data.data instanceof Array ? (
          data.data.map((event: Event) => (
            <Card key={event.id} className="aspect-square max-w-md">
              <CardHeader>
                <CardTitle>{event.detailed_event_name + " " + event.discipline_name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{event.venue_name}</p>
                <img src={event.discipline_pictogram} className="w-20 object-fill" />
              </CardContent>
              <CardFooter>
                <Button variant={"default"}>View</Button>
              </CardFooter>
            </Card>
          ))
        ) : "No content"
      }
    </div >
  )
}

export default Home