<template>
  <div class="recommend-page">
    <div class="content-1">此页面总结了一些常用的毕业面具，技能和特性的搭配仅供参考，特性仅能通过合体继承，请善用本站的反查功能。实战过程中只需明白技能卡和绞刑替换技能的使用方法，有技能卡的优先电刑出技能卡，没技能卡的就靠绞刑继承，自己有想法的可以自由去搭配技能。吸收技能可更换为反弹技能，反弹技能大多可以电刑出技能卡，继承技能更加方便。若想深入了解本作合成机制及凹面具的原理可移步<a href="https://www.bilibili.com/video/BV13B4y1F7EA/" target="_blank">[视频]P5R面具合成详细攻略</a>或者<a href="https://www.bilibili.com/read/cv19379754/" target="_blank">[文章]P5R面具合成详细攻略</a> </div>
    <div class="persona-table">
      <div class="persona-type">物理P</div>
      <div class="persona-name"><a href="" @click.prevent="$router.push('/persona/173')">塔LV87义经</a></div>
      <div class="characteristic-box">
        <span class="characteristic">特性</span>
        <span class="characteristic-span">究极不灭的怒发冲冠<a href="" @click.prevent="$router.push('/persona/124')">(力量LV80藏王权现)</a></span>
        <span class="characteristic-span">物理攻击力+30%</span>
      </div>
      <div class="skill-box">
        <span class="skill"><span>技能</span></span>
        <span class="skill-span">八艘跳</span>
        <span class="skill-span">物理小量伤害</span>
        <span class="skill-span">敌全体八次</span>
        <span class="skill-span">义经94级习得</span>
        <span class="skill-span">建言</span>
        <span class="skill-span">提升暴击率</span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/92')">隐者LV4双角兽</a>8级习得</span>
        <span class="skill-span">武道的诀窍</span>
        <span class="skill-span">技能消耗HP减少50%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/192')">月LV55月读命贼神</a></span>
        <span class="skill-span">冰冻吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/207')">审判LV64八岐大蛇</a>66级习得</span>
        <span class="skill-span">疾风吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/71')">恋爱LV85伊丝塔</a>初始技能</span>
        <span class="skill-span">念动吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/82')">战车LV88蚩尤</a>92级习得</span>
        <span class="skill-span">核热吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/102')">隐者LV86法夫纳</a>92级习得</span>
        <span class="skill-span">咒怨吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/134')">倒悬者LV82阿提斯</a></span>
      </div>
      <div class="fusion-path"></div>
    </div>
    <div class="tip">注：枪击伤害不吃怒发冲冠的加成。关于【究极不灭的怒发冲冠】和【剑神的意念】伤害对比，【究极不灭的怒发冲冠】蓄力后有1.3 × 2.5 = 3.25 倍伤害，【剑神的意念】是蓄力后伤害从2.5提升到3倍，且怒发冲冠不蓄力也有1.3倍伤害，所以怒发冲冠更好</div>
    <div class="persona-table">
      <div class="persona-type">输出＆咒怨P</div>
      <div class="persona-name"><a href="" @click.prevent="$router.push('/persona/192')">月LV50月读命</a> <a href="" @click.prevent="$router.push('/persona/193')">月LV55月读命·贼神</a></div>
      <div class="characteristic-box">
        <span class="characteristic">特性</span>
        <span class="characteristic-span">万夫莫敌的眼神<a href="" @click.prevent="$router.push('/persona/194')">(月LV60莉莉丝)</a></span>
        <span class="characteristic-span">攻击范围为敌方全体的魔法攻击力上升20%</span>
      </div>
      <div class="skill-box">
        <span class="skill"><span>技能</span></span>
        <span class="skill-span">炼狱之翼</span>
        <span class="skill-span">咒怨特大伤害</span>
        <span class="skill-span">敌全体</span>
        <span class="skill-span">月LV50月读命与月LV55月读命·贼神初始技能</span>
        <span class="skill-span">高级咒怨强化</span>
        <span class="skill-span">咒怨属性伤害提升50%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/164')">恶魔LV82贝利亚初始技能</a>初始技能</span>
        <span class="skill-span">咒怨强化</span>
        <span class="skill-span">咒怨属性伤害提升25%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/23')">魔术师LV28克伦佐</a>32级习得</span>
        <span class="skill-span">魔导才能</span>
        <span class="skill-span">全魔法伤害提升25%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">公开处刑获得</span>
        <span class="skill-span">魔术的资质</span>
        <span class="skill-span">技能消耗SP减50%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/193')">月LV55月读命·贼神</a></span>
        <span class="skill-span">瞬间恢复</span>
        <span class="skill-span">1回合内从异常中恢复</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">核热吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/102')">隐者LV86法夫纳</a>92级习得</span>
        <span class="skill-span">祝福吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/37')">女教皇LV83西布莉</a>87级习得</span>
      </div>
      <div class="fusion-path"></div>
    </div>
    <div class="persona-table">
      <div class="persona-type">输出＆祝福P</div>
      <div class="persona-name"><a href="" @click.prevent="$router.push('/persona/186')">月LV16辉夜</a> <a href="" @click.prevent="$router.push('/persona/189')">月LV25辉夜·贼神</a></div>
      <div class="characteristic-box">
        <span class="characteristic">特性</span>
        <span class="characteristic-span">万夫莫敌的眼神<a href="" @click.prevent="$router.push('/persona/194')">(月LV60莉莉丝)</a></span>
        <span class="characteristic-span">攻击范围为敌方全体的魔法攻击力上升20%</span>
      </div>
      <div class="skill-box">
        <span class="skill"><span>技能</span></span>
        <span class="skill-span">辉箭</span>
        <span class="skill-span">祝福小量伤害</span>
        <span class="skill-span">敌全体4-8次</span>
        <span class="skill-span">辉夜初始技能</span>
        <span class="skill-span">高级祝福强化</span>
        <span class="skill-span">祝福属性伤害提升50%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/86')">正义LV41能天使</a></span>
        <span class="skill-span">祝福强化</span>
        <span class="skill-span">祝福属性伤害提升25%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/86')">正义LV41能天使</a></span>
        <span class="skill-span">魔导才能</span>
        <span class="skill-span">全魔法伤害提升25%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">公开处刑获得</span>
        <span class="skill-span">魔术的资质</span>
        <span class="skill-span">技能消耗SP减50%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/193')">月LV55月读命·贼神</a></span>
        <span class="skill-span">瞬间恢复</span>
        <span class="skill-span">1回合内从异常中恢复</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">物理吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/82')">战车LV88蚩尤</a></span>
        <span class="skill-span">火焰吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/123')">力量LV74奇美拉</a></span>
      </div>
    </div>
    <div class="persona-table">
      <div class="persona-type">即死咒怨P</div>
      <div class="persona-name"><a href="" @click.prevent="$router.push('/persona/147')">死神LV83爱丽丝</a></div>
      <div class="characteristic-box">
        <span class="characteristic">特性</span>
        <span class="characteristic-span">断罪宣告者<a href="" @click.prevent="$router.push('/persona/196')">(月LV75圣达芬)</a></span>
        <span class="characteristic-span">即死技能成功率大幅提升</span>
      </div>
      <div class="skill-box">
        <span class="skill"><span>技能</span></span>
        <span class="skill-span">可以为我而死吗</span>
        <span class="skill-span">高机率咒怨属性即死效果</span>
        <span class="skill-span">敌全体</span>
        <span class="skill-span">爱丽丝初始技能</span>
        <span class="skill-span">姆多成功率UP</span>
        <span class="skill-span">姆多系技能成功率上升25%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">爱丽丝初始技能</span>
        <span class="skill-span">胜利咆哮</span>
        <span class="skill-span">战斗胜利后HP和SP完全恢复</span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/231')">世界LV80伊邪纳岐大神</a>初始技能</span>
        <span class="skill-span">不动如山</span>
        <span class="skill-span">敌人攻击伤害减半但无法回避所有攻击</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">瞬间恢复</span>
        <span class="skill-span">1回合内从异常中恢复</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">物理吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/82')">战车LV88蚩尤</a></span>
        <span class="skill-span">火焰吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/123')">力量LV74奇美拉</a></span>
        <span class="skill-span">祝福吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/37')">女教皇LV83西布莉</a>87级习得</span>
      </div>
    </div>
    <div class="tip">注：推图p，命中无咒反咒吸的杂兵必即死，万一miss了也有不动如山和瞬间恢复容错。技能格子比较充裕，所以随便带了火焰吸收。</div>
    <div class="persona-table">
      <div class="persona-type">即死祝福P</div>
      <div class="persona-name"><a href="" @click.prevent="$router.push('/persona/59')">教皇LV40大僧正</a></div>
      <div class="characteristic-box">
        <span class="characteristic">特性</span>
        <span class="characteristic-span">断罪宣告者<a href="" @click.prevent="$router.push('/persona/196')">(月LV75圣达芬)</a></span>
        <span class="characteristic-span">即死技能成功率大幅提升</span>
      </div>
      <div class="skill-box">
        <span class="skill"><span>技能</span></span>
        <span class="skill-span">回转讲道</span>
        <span class="skill-span">高机率祝福属性即死效果</span>
        <span class="skill-span">敌全体</span>
        <span class="skill-span">大僧正41级习得</span>
        <span class="skill-span">哈玛成功率UP</span>
        <span class="skill-span">哈玛系技能成功率上升25%</span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/32')">女教皇LV26伊西丝</a>30级习得</span>
        <span class="skill-span">胜利咆哮</span>
        <span class="skill-span">战斗胜利后HP和SP完全恢复</span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/231')">世界LV80伊邪纳岐大神</a>初始技能</span>
        <span class="skill-span">不动如山</span>
        <span class="skill-span">敌人攻击伤害减半但无法回避所有攻击</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">瞬间恢复</span>
        <span class="skill-span">1回合内从异常中恢复</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">火焰吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/123')">力量LV74奇美拉</a></span>
        <span class="skill-span">冰冻吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/207')">审判LV64八岐大蛇</a>66级习得</span>
        <span class="skill-span">咒怨吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/134')">倒悬者LV82阿提斯</a></span>
      </div>
    </div>
    <div class="tip">推图p，技能格子过于充裕随便带了火吸和冰吸，可根据自己喜好搭配。</div>
    <div class="persona-table">
      <div class="persona-type">开场＆debuffP</div>
      <div class="persona-name"><a href="" @click.prevent="$router.push('/persona/210')">审判LV82湿婆</a></div>
      <div class="characteristic-box">
        <span class="characteristic">特性</span>
        <span class="characteristic-span">莲华带来的富贵<a href="" @click.prevent="$router.push('/persona/114')">(命运LV69吉祥天)</a></span>
        <span class="characteristic-span">持有这个特性的P发动辅助技能，无论是对自己还是对同伴效果都会增加二回合</span>
      </div>
      <div class="skill-box">
        <span class="skill"><span>技能</span></span>
        <span class="skill-span">女巫诅咒</span>
        <span class="skill-span">敌方攻击/防御/命中率与回避率降低3回合</span>
        <span class="skill-span">敌一人</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/169')">塔LV48祸津伊邪那岐·贼神</a></span>
        <span class="skill-span">自动玛哈塔尔卡</span>
        <span class="skill-span">战斗开始时全员攻击提升</span>
        <span class="skill-span">自动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/12')">愚者LV49巴古斯</a>51级习得</span>
        <span class="skill-span">自动玛哈拉库卡</span>
        <span class="skill-span">战斗开始时全员防御提升</span>
        <span class="skill-span">自动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/78')">战车LV46雅典娜</a>50级习得</span>
        <span class="skill-span">自动玛哈斯库卡</span>
        <span class="skill-span">战斗开始时全员回避率提升</span>
        <span class="skill-span">自动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/113')">命运LV62亚斯泰利欧斯·贼神</a>63级习得</span>
        <span class="skill-span">物理吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/82')">战车LV88蚩尤</a></span>
        <span class="skill-span">火焰吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/123')">力量LV74奇美拉</a></span>
        <span class="skill-span">疾风吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/71')">恋爱LV85伊丝塔</a>初始技能</span>
        <span class="skill-span">核热吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/102')">隐者LV86法夫纳</a>92级习得</span>
      </div>
    </div>
    <div class="persona-table">
      <div class="persona-type">开场＆专心致志P</div>
      <div class="persona-name"><a href="" @click.prevent="$router.push('/persona/209')">审判LV81弥赛亚</a> <a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></div>
      <div class="characteristic-box">
        <span class="characteristic">特性</span>
        <span class="characteristic-span">剑神的意念<a href="" @click.prevent="$router.push('/persona/28')">(魔术师LV86经津主)</a></span>
        <span class="characteristic-span">蓄力和专心致志的倍率从2.5倍提升至3倍</span>
      </div>
      <div class="skill-box">
        <span class="skill"><span>技能</span></span>
        <span class="skill-span">女巫诅咒</span>
        <span class="skill-span">敌方攻击/防御/命中率与回避率降低3回合</span>
        <span class="skill-span">敌一人</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/169')">塔LV48祸津伊邪那岐·贼神</a></span>
        <span class="skill-span">自动玛哈塔尔卡</span>
        <span class="skill-span">战斗开始时全员攻击提升</span>
        <span class="skill-span">自动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/12')">愚者LV49巴古斯</a>51级习得</span>
        <span class="skill-span">自动玛哈拉库卡</span>
        <span class="skill-span">战斗开始时全员防御提升</span>
        <span class="skill-span">自动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/78')">战车LV46雅典娜</a>50级习得</span>
        <span class="skill-span">自动玛哈斯库卡</span>
        <span class="skill-span">战斗开始时全员回避率提升</span>
        <span class="skill-span">自动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/113')">命运LV62亚斯泰利欧斯·贼神</a>63级习得</span>
        <span class="skill-span">不动如山</span>
        <span class="skill-span">敌人攻击伤害减半但无法回避所有攻击</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">瞬间恢复</span>
        <span class="skill-span">1回合内从异常中恢复</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">物理吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/82')">战车LV88蚩尤</a></span>
        <span class="skill-span">咒怨吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/134')">倒悬者LV82阿提斯</a></span>
      </div>
    </div>
    <div class="tip">注：剑神的意念拥有开场自带专心致志的隐藏效果。</div>
    <div class="persona-table">
      <div class="persona-type">辅助P</div>
      <div class="persona-name"><a href="" @click.prevent="$router.push('/persona/3')">愚者LV11俄耳甫斯(f)</a> <a href="" @click.prevent="$router.push('/persona/4')">愚者LV11俄耳甫斯·贼神(f)</a></div>
      <div class="characteristic-box">
        <span class="characteristic">特性</span>
        <span class="characteristic-span">莲华带来的富贵<a href="" @click.prevent="$router.push('/persona/114')">(命运LV69吉祥天)</a></span>
        <span class="characteristic-span">持有这个特性的P发动辅助技能，无论是对自己还是对同伴效果都会增加二回合</span>
      </div>
      <div class="skill-box">
        <span class="skill"><span>技能</span></span>
        <span class="skill-span">新华彩乐段</span>
        <span class="skill-span">我方全体回复一半HP，并且攻击/防御/命中率与回避率提升3回合</span>
        <span class="skill-span">我方全体</span>
        <span class="skill-span"> 愚者LV13俄耳普斯·贼神(f)和愚者LV11俄耳甫斯(f)初始技能</span>
        <span class="skill-span">革命</span>
        <span class="skill-span">在3回合间，使敌我双方全体的暴击率上升</span>
        <span class="skill-span">敌我全体</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/202')">太阳LV53象头神</a></span>
        <span class="skill-span">不动如山</span>
        <span class="skill-span">敌人攻击伤害减半但无法回避所有攻击</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">瞬间恢复</span>
        <span class="skill-span">1回合内从异常中恢复</span>
        <span class="skill-span">被动</span>
        <span class="skill-span">普通电椅<a href="" @click.prevent="$router.push('/persona/212')">审判LV90弥赛亚·贼神</a></span>
        <span class="skill-span">物理吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/82')">战车LV88蚩尤</a></span>
        <span class="skill-span">电击吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">监禁<a href="" @click.prevent="$router.push('/persona/37')">女教皇LV83西布莉</a>一定几率习得或者公开处刑获得</span>
        <span class="skill-span">祝福吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span"><a href="" @click.prevent="$router.push('/persona/37')">女教皇LV83西布莉</a>87级习得</span>
        <span class="skill-span">咒怨吸收</span>
        <span class="skill-span"></span>
        <span class="skill-span">被动</span>
        <span class="skill-span">警报电椅<a href="" @click.prevent="$router.push('/persona/134')">倒悬者LV82阿提斯</a></span>
      </div>
    </div>
    
    <div>后续施工中......</div>
  </div>
   
</template>
<script setup></script>
<style lang="scss" scoped>
.recommend-page {
  color: white;
  background-color: rgba(27, 24, 24, 0.8);
  .tip {
    font-size: 12px;
    padding: 5px 5px 0 5px;
    text-indent: 28px;
  }
}
.content-1 {
  padding: 5px 5px 0 5px;
  font-size: 14px;
  text-indent: 28px;
  a:link,
  a:visited {
    color: #fde269;
    font-style: italic;
  }
  a:hover {
    color: #f80910;
  }

.red {
  color: #f53b41;
}
}


.persona-table {
  font-size: 14px;
  margin-top: 20px;
  .persona-type {
    background-color: $default-red-color;
    text-align: center;
    padding: 8px 0;
    border: 2px solid #ebeef5;
  }
  .persona-name {
    background-color: $default-red-color;
    text-align: center;
    padding: 8px 0;
    border-bottom: 2px solid #ebeef5;
    border-left: 2px solid #ebeef5;
    border-right: 2px solid #ebeef5;
    a:link,
    a:visited {
      color: #fde269;
      font-style: italic;
      text-decoration: none;
    }
    a:hover {
      color: #f80910;
    }
  }
  .characteristic-box {
    background-color: $default-gray-color;
    border-bottom: 2px solid #ebeef5;
    border-left: 2px solid #ebeef5;
    border-right: 2px solid #ebeef5;
    
    display: grid;
    grid-template-columns: 1fr 8fr 8fr;
    
  }
  .characteristic {
    padding: 8px 8px;
    text-align: center;
    box-sizing: border-box;
    background-color: $default-red-color;
    color: white;
  }
  .characteristic-span { 
    color: black;
    padding: 8px 8px;
    text-align: center;
    box-sizing: border-box;
    background-color: $default-gray-color;
    border-left: 2px solid #ebeef5;
    a:link,
    a:visited {
      color: blue;
      text-decoration: none;
    }
    a:hover {
      color: #f80910;
    }
  }
}

.skill-box {
  background-color: $default-gray-color;
  border-bottom: 1px solid #ebeef5;
  border-left: 2px solid #ebeef5;
  border-right: 2px solid #ebeef5;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 4fr 4fr;
  .skill {
    grid-row: 1/9;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $default-red-color;
  }
  .skill-span {
    color: black;
    padding: 8px 8px;
    border-left: 2px solid #ebeef5;
    border-bottom: 2px solid #ebeef5;
  }
    a:link,
    a:visited {
      color: blue;
      text-decoration: none;
    }
    a:hover {
      color: #f80910;
    }
}




</style>
