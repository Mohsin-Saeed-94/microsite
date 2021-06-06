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
    setCSS(cssjig){
        this.css = cssjig
    }
  }
  Site.metadata={ emoji: '🏕' }

  class CSS extends Jig {
    init(url){
        this.url = url
    }
  }
  CSS.metadata = {emoji:'👔'}
  

  //Site location 068b8fd258aaf47bb18907f728929d82437cb385001f313116bb61d2f4883cd9_o1
  //CSS location 75210f54ee4c219cb381d0adc639c53e2cd206d93d28d3be49647904c4570ec2_o1