import { Card, CardContent } from "@/components/ui/card"


export function About() {
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
                I'm a passionate software engineer with over 2 years of experience creating digital solutions that
                make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>

              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community.
              </p>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>🎓 Computer Science Graduate</li>
                    <li>💼 2+ Years of Professional Experience</li>
                    <li>🌍 Based in Bangalore</li>
                    <li>☕ Tea Enthusiast</li>
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
