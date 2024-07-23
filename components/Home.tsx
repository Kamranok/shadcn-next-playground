import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface Recipe {
  title: string
  image: string
  time: number
  description: string
  vegan: boolean
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes")

  //dealy response
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()
}

const Home = async () => {
  const recipes = await getRecipes()
  return (
    <>
      <main>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className=" flex flex-col justify-between">
              <CardHeader className="flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={`/img/${recipe.image}`} alt="recipe img" />
                  <AvatarFallback> {recipe.title.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {recipe.time} mins to cook.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{recipe.description}</p>
              </CardContent>
              <CardFooter className=" flex justify-between">
                <Button>View Recipe</Button>
                {recipe.vegan && <Badge variant={"secondary"}>Vegan!</Badge>}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
