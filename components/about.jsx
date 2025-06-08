"use client";
import { Card, CardContent } from "@/components/ui/card"
import { UseConfig } from "@/components/logic/UseConfig"

export function About() {

  const { about } = UseConfig()

  // console.log(about)
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className=" size-64 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                <div className=" size-64 border border-white rounded-full overflow-hidden flex items-center justify-center shadow-lg">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                {about.bio}
              </p>

              <p className="text-lg text-muted-foreground">
                {about.hobbies}
              </p>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {about.quickFacts && about.quickFacts.map((fact, idx) => (
                      <li key={idx}>{fact}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
