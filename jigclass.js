class Site extends Jig {
    init(){
        this.label = [0,0,0]
        this.content = [0,0,0]
    }
    setTitle(title){
        this.title = title
    }
    setSubtitle(subtitle){
        this.subtitle = subtitle
    }
    setSectionLabel(i,label){
        this.label[i-1] = label
    }
    setSectionContent(i,content){
        this.content[i-1] = content
    }
    setHeroImg(heroimgurl){
        this.heroimgurl = heroimgurl
    }
    setSquareImg(squareimgurl){
        this.squareimgurl = squareimgurl
    }
    setEmbed(html){
        this.embed = html
    }
  }
  Site.icon={ emoji: '🏕' }

  //Site location 1b7b2f40379d61f1ecf7dd287aebb63f11ed53b2d4265cccab3991b95a8eceb3_o1