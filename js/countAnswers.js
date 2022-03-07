class Test_key {
  constructor(a) {
    this.a = a  // a is object of questions and answers #q1:1, q2:4, etc.
  }

  getSum2(arrAnswers) {
    let count5and6 = 0;
    for (const ansewer of arrAnswers) {
      if (ansewer === 5 || ansewer === 6) {
        count5and6++;
      }
    }
    return count5and6;
  }

  get generalScore() {
    return {
      sum: this.ed.sum + this.ab.sum + this.ma.sum + this.si.sum + this.ds.sum + this.fa.sum +
        this.di.sum + this.vh.sum + this.em.sum + this.sb.sum + this.ss.sum + this.ei.sum +
        this.us.sum + this.et.sum + this.is.sum + this.as.sum + this.np.sum + this.pu.sum,

      sumMedianas: this.ed.mediana + this.ab.mediana + this.ma.mediana + this.si.mediana + this.ds.mediana + this.fa.mediana +
      this.di.mediana + this.vh.mediana + this.em.mediana + this.sb.mediana + this.ss.mediana + this.ei.mediana +
      this.us.mediana + this.et.mediana + this.is.mediana + this.as.mediana + this.np.mediana + this.pu.mediana,

      mediana:( this.ed.sum + this.ab.sum + this.ma.sum + this.si.sum + this.ds.sum + this.fa.sum +
      this.di.sum + this.vh.sum + this.em.sum + this.sb.sum + this.ss.sum + this.ei.sum +
      this.us.sum + this.et.sum + this.is.sum + this.as.sum + this.np.sum + this.pu.sum) / 18,

      sum2: this.ed.sum2 + this.ab.sum2 + this.ma.sum2 + this.si.sum2 + this.ds.sum2 + this.fa.sum2 +
      this.di.sum2 + this.vh.sum2 + this.em.sum2 + this.sb.sum2 + this.ss.sum2 + this.ei.sum2 +
      this.us.sum2 + this.et.sum2 + this.is.sum2 + this.as.sum2 + this.np.sum2 + this.pu.sum2
    }

  }

  get ed() {
    return {
      sum: this.a.q1 + this.a.q19 + this.a.q37 + this.a.q55 + this.a.q73,
      mediana: (this.a.q1 + this.a.q19 + this.a.q37 + this.a.q55 + this.a.q73) / 5,
      sum1: ((this.a.q1 + this.a.q19 + this.a.q37 + this.a.q55 + this.a.q73) - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q1, this.a.q19, this.a.q37, this.a.q55, this.a.q73])
    }
  }
  get ab() {
    return {
      sum: this.a.q2 + this.a.q20 + this.a.q38 + this.a.q56 + this.a.q74,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q2, this.a.q20, this.a.q38, this.a.q56, this.a.q74])
    }
  }
  get ma() {
    return {
      sum: this.a.q3 + this.a.q21 + this.a.q39 + this.a.q57 + this.a.q75,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q3, this.a.q21, this.a.q39, this.a.q57, this.a.q75])
    }
  }
  get si() {
    return {
      sum: this.a.q4 + this.a.q22 + this.a.q40 + this.a.q58 + this.a.q76,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q4, this.a.q22, this.a.q40, this.a.q58, this.a.q76])
    }
  }
  get ds() {
    return {
      sum: this.a.q5 + this.a.q23 + this.a.q41 + this.a.q59 + this.a.q77,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q5, this.a.q2, + this.a.q41, this.a.q59, this.a.q77])

    }
  }
  get fa() {
    return {
      sum: this.a.q6 + this.a.q24 + this.a.q42 + this.a.q60 + this.a.q78,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,

      sum2: this.getSum2([this.a.q6, this.a.q24, this.a.q42, this.a.q60, this.a.q78])

    }
  }
  get di() {
    return {
      sum: this.a.q7 + this.a.q25 + this.a.q43 + this.a.q61 + this.a.q79,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q7, this.a.q25, this.a.q43, this.a.q61, this.a.q79])

    }
  }
  get vh() {
    return {
      sum: this.a.q8 + this.a.q26 + this.a.q44 + this.a.q62 + this.a.q80,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q8, this.a.q26, this.a.q44, this.a.q62, this.a.q80])

    }
  }
  get em() {
    return {
      sum: this.a.q9 + this.a.q27 + this.a.q45 + this.a.q63 + this.a.q81,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q9, this.a.q27, this.a.q45, this.a.q63, this.a.q81])

    }
  }
  get sb() {
    return {
      sum: this.a.q10 + this.a.q28 + this.a.q46 + this.a.q64 + this.a.q82,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q10, this.a.q28, this.a.q46, this.a.q64, this.a.q82])

    }
  }
  get ss() {
    return {
      sum: this.a.q11 + this.a.q29 + this.a.q47 + this.a.q65 + this.a.q83,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q11, this.a.q29, this.a.q47, this.a.q65, this.a.q83])

    }
  }
  get ei() {
    return {
      sum: this.a.q12 + this.a.q30 + this.a.q48 + this.a.q66 + this.a.q84,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q12, this.a.q30, this.a.q48, this.a.q66, this.a.q84])

    }
  }
  get us() {
    return {
      sum: this.a.q13 + this.a.q31 + this.a.q49 + this.a.q67 + this.a.q85,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q13, this.a.q31, this.a.q49, this.a.q67, this.a.q85])

    }
  }
  get et() {
    return {
      sum: this.a.q14 + this.a.q32 + this.a.q50 + this.a.q68 + this.a.q86,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q14, this.a.q32, this.a.q50, this.a.q68, this.a.q86])

    }
  }
  get is() {
    return {
      sum: this.a.q15 + this.a.q33 + this.a.q51 + this.a.q69 + this.a.q87,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q15, this.a.q33, this.a.q51, this.a.q69, this.a.q87])

    }
  }
  get as() {
    return {
      sum: this.a.q16 + this.a.q34 + this.a.q52 + this.a.q70 + this.a.q88,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q16, this.a.q34, this.a.q52, this.a.q70, this.a.q88])

    }
  }
  get np() {
    return {
      sum: this.a.q17 + this.a.q35 + this.a.q53 + this.a.q71 + this.a.q89,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q17, this.a.q35, this.a.q53, this.a.q71, this.a.q89])

    }
  }
  get pu() {
    return {
      sum: this.a.q18 + this.a.q36 + this.a.q54 + this.a.q72 + this.a.q90,
      mediana: this.sum / 5,
      sum1: (this.sum - 5) / 25 * 100,
      sum2: this.getSum2([this.a.q18, this.a.q36, this.a.q54, this.a.q72, this.a.q90])

    }
  }
}

