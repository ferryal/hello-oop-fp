class Entertainment {
  constructor(cast, audience, duration, crew) {
    this.cast = cast || []
    this.audience = audience || 0
    this.duration = duration || 0
    this.crew = crew || 0
  }

  listCast(newListActor) {
    this.cast = newListActor
  }

  maxAudience(newAudience) {
    this.audience = newAudience
  }

  setDuration(newDuration) {
    this.duration = newDuration
  }

  setCrew(newCrew) {
    this.crew = newCrew
  }
}
//inheritance of Entertainment
class Music extends Entertainment {
  constructor(cast, audience, duration, crew, genre, stage, awards, fanbase) {
    super(cast, audience, duration, crew)
    this.genre = genre || "null"
    this.stage = stage || "null"
    this.fanbase = fanbase || "null"
  }

}

//inheritance of Music
class Traditional extends Music {
  constructor(cast, audience, duration, crew, genre, stage, awards, fanbase) {
    super(cast, audience, duration, crew, "Traditional", stage, fanbase)
    this.culture = culture || "null"
  }
}

class Modern extends Music {
  constructor(cast, audience, duration, crew, genre, stage, awards, fanbase) {
    super(cast, audience, duration, crew, "Modern", stage, fanbase)
    this.awards = awards || []
  }
  showAwards() {
    const currentAwards = this.awards
    let text = "This group have awards.. "

    currentAwards.map((award) => {
      text += `${award}, `
    })
    return text
  }
}

module.exports = {
  Entertainment,
  Music,
  Traditional,
  Modern
}
