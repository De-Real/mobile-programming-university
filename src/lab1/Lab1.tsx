import {FC, memo, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, Switch, Text, View} from 'react-native';

import SvgImage from './SvgImage';

interface Props {}

const Lab1: FC<Props> = () => {
  const {i18n, t} = useTranslation();

  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    if (i18n.resolvedLanguage === 'en') {
      setIsEnglish(true);
    } else {
      setIsEnglish(false);
    }
  }, [i18n.resolvedLanguage]);

  const toggleLanguage = () => {
    setIsEnglish(previousState => {
      i18n.changeLanguage(!previousState ? 'en' : 'uk');

      return !previousState;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t('laboratoryWork', {number: 1})}</Text>
      <Text style={styles.task}>{t('task', {taskNumber: 1})}</Text>
      <Text style={styles.name}>{t('name')}</Text>
      <Text style={styles.task}>{t('task', {taskNumber: 2})}</Text>
      <SvgImage />
      <Text style={styles.task}>{t('task', {taskNumber: 3})}</Text>
      {/* Language Switch */}
      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>Українська</Text>
        <Switch
          value={isEnglish}
          onValueChange={toggleLanguage}
          style={styles.switch}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnglish ? '#f5dd4b' : '#f4f3f4'}
        />
        <Text style={styles.languageText}>English</Text>
      </View>
      <View style={styles.flagsContainer}>
        <Text style={styles.flag}>{t('flag')}</Text>
        <Text style={styles.flag}>{t('flag')}</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAEhCAMAAADRQ2tlAAAAdVBMVEX/////1QD/0wD/0gD/+N7/88j///3//ff/6pz/3Ez/+eP/3FL/5o////v/8sX/66T/5YT/8Lv/++3/43n/+uf/6JX/9M7/4Wv/3lv/7Kn/66L/7rP//PH/1yH/9tX/6Zn/20H/4nT/2jz/5on/32H/2TP/4XAC+QmzAAAQM0lEQVR4nO2daVvjvA6GGwdalrJDBwqFdmDm///E04W20SNZi5M2vNcZfYMmzh3HlmVZlgeDw8jVgco9jPw675sgIjd1+uybwS/vdVXV131TuKVaSRr1jeGURVrzXvbN4ZNJvaat6ru+SVwyq7bSN4lHXtKWNo37ZnFItZf6rW8YU6apwXvbN40pVVPSTx+L7xLBnfbNY8jvikrfPLpc1JS2nvRNpMpTgtp96JtIlVmF0jeRJo810tbvfTMp8optoUoffTMp8pe1heonTys4bVX3zZSXEWu6S9yLTh9x0aFV+s6a7rLxdlj+5H1wUp8/dlUc72lL3LOuSn/7Ws7/Tuqq7mrW+iHgdjZQnNVVOl3hVqk67aTEW4G2+uqk6JPZsiq+cZcd4m8XZf6ScOddlPy5ptzhLqWD4edZwv3TvtyL2aaVNXHr9jOrSwl31rrYmy1iE7dK87aOjPOD4D7vCZu47RvEIRrDRaMoxK1vWhX91T3uXRMPcau6lZbsXjOMCR3DrVIbC0rEbVUgwDHc5ccr73ALCfe5nPYcRkkJt6qKfS/iqPartLThHyxKxq3uCx8w7hJ3xOd9GdxS3icJd9EZbRa3kPdMssjK/GRXAm0et6z9vki4RWP7UKJVcGclzjjRPC+aCqPvysItGozuJNySgfJS+kwqbirQl9cS7mu8nAeZVsOtUryPdDS1nGaRFNyqDteLVFYKLwdOskQqblWfBB/EXWTLR0SN0vtMSzBxq2oYe9Kb5BaJvjMbev24wYXHKwk36MVY5CvXxK2DawsSbmzAudNwLNyoh0sqITTevCl168ANTgyFoTPmgRQnpwHc2EKpNHZG7n8xYBgum7+EerZQOZHPw5pCov5thpt4BUWMB2GyNg/czib+5wN9apkGI7wlvfif98BxA6bHNWsKwysDd8jHwECUijD7CfgK8dZlOxyZuHwpzz99EaYTfkMJn7vy0ThwB3N8S7fyFaYTT9572Qi+GlI9uOxGt2eD2+f+NfcF3jly4jL1516IPuW4XisUrblN4JELl+nP385nvrO+7TZ30R240Sg+3PvC6uUGr9fcxciC9BbAHYzhq859D+UGr3dQhAFm2+SduKgDnQvnQ47rc7Dg59wO3V5ctDudy02sq9W+MQacgbt4Ty8uzkGctYS0TvtxmGt7btxTqF7fyia3IF23wfCyb3puXDa2uZ7LLEif/Qhm/X6K6MeF6vW5N5gFOffcBeq60a/9uNh6XSMxsyBd9uMi+4oBXDAAXJ2NWZAu+xEe1BgIA7jQzV3GCrMgPfYjGkaNnyK4YIB6ZkFoQbq8u9RcINUSwYWhxtMasKI8n+QK2kJzYIngwgq6x7GMFqTHfoRXJONnCBcKcuiGE8R1qL8FvYNYnCFc8Hk5xn9mBzosT7iD/BbDpVrfYWqjBemwH8EvQ9fQY7jQGmythC5Th7uU6r5Eg5hiuPB0hwGAk2/bXQr9mf4YwwWTxfFwSutxlyp6IYw7pV/KbryAm8wb4Png4QriQj+wfRzhUHm60oltPYgLn8peqwCD127tYMPBr1HcZ7U0LnC97aCgZioGP0RxqZljmw0LimsPhPq2kCguXea1Byn4tqZ1TodBVn4U917tuFw+Ka5pndPqYMN8FBc0kzmuQQivGZZGNSXrG2FcOiE2P+40OGxTfwjTPGHcBSnPVEwwnTCXuagmYW8XxqVf1xylqNa3A8+JHuMTgDDuq94XUKL71YxBPow7objWMgXgWpqEmnzcOg7jPuqKEQX0tDVVo2qXW3xhXOqyNZ9PP4Y5VZsYPSOMC3s9LZvsPYZLewbXO3FcqnitJcGTmIFMoya5Vo/j0umlZbNAcRbughTOx8A4LnjpYrjWbhdiHgtaOo5LxynLeX8RwyU1IbT0OO51yOI1DEIU6+o4LlxgrFg9hq6m5qnglIjjwh2GaorhUrVXmw934EL7MqyAGO6dbu0W4dJlGcOCjbVd6nCad4JLTVLDQI8pMmqcC3sACnBpmYbLPzZM0JoQbPkC3GnEQI/ZDKSdSdZmAS7tD4Zb7zRkQJoGRgEuaBvdwRyaTVDntVRyAe59pDnC1FK3N2HzmTCxKsCFkVKfz4T8DNeW2i3CJWUakQIQR6FHbdBPIemcElzqBNV3SMGS+1y9mHqoJI1egkujUnUfaCgKgr6bNF6W4EYMdKDVzWPiahe1SAnuq2U37QVDnXTzmFwqDikluFT1q0tlGPemmmQQnCtdWoIbsLKo38AY1ui7iR+iBBdqQSNgEbGaC3JizwJLcAOeEbaXVVN7lk+kFJeuzmieEZZDQHMI02Ua0YNRhEujT7TFNaRVNdnCroUiXPqJlQqLRZjS0VJsY0W4N17PCCoG3UCnxrnYg4tw77yekSnD1Swih34swn239flGhF0peR8g+EREv3wRLhjo+e/LaZW5HcxSxMiHIlz4bNkZTWzzoukTKcZ1ekbEfcLZ2Qdt6LJdWoZLtX92iiAmPMiOKreOQstw6Tp61jOCtvlGcldTn4isQcpwPxzNbCDuDFX0nrFg2QLXt3TJB4l1kTlF4rmqDHfi8oyIyS+yk3dKktmYUYYLXtuMZ0Ruurm2Az4R2ZdVhgtLl7JukvZgr0nk2dK1xxApw4XhSp4iSMkklLd7sY3zYlz6neUpgrAvdCOyB9v2iRTjvtDnz8WLcrQZswHMIfkTlOBOZviZpZLz27lllz90zDTraOL+wKcI0kuJaQo3IqoydlUt2CJh3Lc/HEPs60oaCOlrCHok8exXUdwT6emS5Y8b5MjrCd9ZSuxRVVgP7QJit1cJ8yox49BWBM2XGbFhwIzhXmTS6Qh7TdTMCoJWlTIUrYqm9RvCZdvzt8L7jjSR2ItgZbCt6Vshk6AQrpxZqZI8I2pbkJwI2UFlXor7mUXgH1fPsiHcIKa4XCM0Xy2Am9H7KSVukGBbeIDK461hVY5cHc0pfPluwE1Rs78fL9PbSzT3oC2ka5xlsrnN5e305WwxqwXkeQmukKEmjXMxhdDK6yHb4Jy58fGp4nuL9/a0H5cljalvs6sSqPO/2BZ7ZRv3mNXLfu7qxuWJPhQnP9gLq4kXWr/K+iUbOfcZANy4rKtrazhw6aoU3FitBRawrIQ769eLiyZA0tZ7MC3D2nzHnABaaAOOR7u5toW7LQC3cavr7KC1NvYt6gZ1Rwu88M4osRLNXJ+uZQJtQV+Klq13rDE1bgPWYJ4n1ys5hfAIniH2W+BR6uIj9qpvHUsnY0Yc+hU2dYnDTkG1Eb1y4UtsRzAsWd8VIKZrBXHi6hFAqHR3rk8cO9QYOJ5FpRhXj+cHN+nedkeTVt9RY2N4cfXPiGXuVDeqXn0nY9ZEC+OqOggVVmM+C+1RD+PJGsBhXPUrYkdrWEG4yVn9SqBIWuBq69DYRcjCFLyK2mUdqsGJq8XHY+WS4Q/tJK16hXNWCnGV8BusXAAC20U70E5zq8RwlXgW6M/Ym3DGma/enHe4ADffpZlyxwvwxbPVm/MOF+DmKwX7ErML0J2QLcmhdgXc+lvodXUmyhnTBPLj3/Ab55QD1prIwXDr0dVaUGlnKgV9tIIvDNWpr6SHwYbDMM93nlsYq+TMzJj3SRpl8agiOczijFmKGxkauLsH4ngv9TbQPfKxsWy0Eq5h89jtD25cHGQEXvREyAcXsurl8QWMdvct3bg43gsnZ8AYkEsmi4nuWPUyR8Pe7nDj8vynqaK9Gs3Z3CIXm9dQd+QpW6hprFr5cQWFnKqnhmsOf8wGkWBAUaPRnExn/DEN/58fd7Bg5SxvqNP89nVd3I31jbMvtmmaF3ef50ny6DUDNgK4V0JJe+Y7+KdmvbA+mSVdS4MhgCu4yZq3wt9qjDdaW5p9QEzQCO7g1mF2bG9sPc3dIpEBKYRrufAbYmzIXbgLolOBGK7HZt7Ig167jnnjRiAsKYjLD6/JST2bZublV5KyytGC7g7iZg/WECSlsQB8Nc6smEglMA9BGPf74Djf43hUwosfVjqjMI47OFX1DgD/Jr7K+9+BW6UDCgtwB0Me0ZCX5hkgr5H7HiSTowR3MHj88j94b7kF3rL+kifbZbhL4M/K+/DtGTbP3oZQV585d3cp7lImn/Pa1XE2Z7ThaWPypXU9HysrYC1wV3e/T8UD9RDi0qkAv6bGNu12uGvJhg00yr31mBtz+1ntcT3eIZ+oW8m6wuWZ40vFkdOyPS4sRXw+iIv8Alw9e6DTazMNTBe4kGtxKC/yM9jq6ZE1JDs1X3tcSjbf/FPYjkJpv2O1aTe10y62xgX/w9a3MNLUbLrcrnTRlmSnDG2Ny1Zpt5K33Bpn6ULKJzMNZmtcSF3YWJfOHYvWdFfBdhwzVXNrXAhTaP7EvEubZ5D+T38zMwO2xqWzIRrULHrAtUvMrJatcbVceSOpemmJ4D49NC64s8G3zEML9SvMx7XFNbY488qFCwI7urvAneiPY85G3MoDr2sdEtIWF7ZdYqADS3WtX2Bmg2uLC3ke2e9gDM/ZBbHUgG1xwavLfoeez/3/5Gcz8WJbXBo+yBfJoPb5x6abg60snG1x6SYvvi8QMiXyrkRxLYvXwjVuH3wQXD4qQc4FrqjoqGgaDTpudWkIeCQvz0FgsXSOv8M4/Qd/RyFXe1fcf4j8wz2k/MM9pPzDPaT8wz2k/MM9pPwXcVNIOgYISX09uH86CwlECT6PqUCA1C38DAE+n8Fnxw4SXwt9IAYGGPbugtwcO9a7TPTTUyBNPFYHvTd2jHmZ0Nka7krUcaFfm4dndCAwG4NwLB13Gpu2dyGwLRGmazounRo5TyJtKefaM1Vc9PEcgxZPGKNeMBUXHJT+U73bCPQX6mtQcek02n2Qc0uhX5TqBg0XFo1yIZ5dC4xcRB1puKFkt90Jboxs1pKGy3fnHkdoLZHOpuDixvIjtQWed8yHCze5DpftRGC7YnN0yuPiAbreo+w7kHwO4zwuRKofw7zZCtRUwwmexYVIdddxv50J1O6+erO4cIMn6Kc7wZQBuzWIHC5uVTqG7bgX3FywM3QyuLjD33H4aacCKzy7OJUMLm7CONaIthXcGrON1JRxMbTfPEisc8EsNGmUx2XpgPTM9IcQbL3fMe4iLsY5HLvlrgTPQN9oUgn3Bh1Fx7HLQfALrw1fAZe5teSNYocWvmllJOGyvTj2WZ6HERZ681vCZcksPcfXH0JYgrf0i+P+wi7pOM37QML2gKUxnNbyxnb6yRsyjyPsQ9ewW4ZHyx/TcER5C7t7+2sKKxHSaqlin3p6WPkbq1/79OYDC8sDpkovA0RT7gPV22/D3QhmEVBoj+YI0eTFyVubZyEfR3w7SNPxjdyMsIFWkt6Vwl4cm6fMyOJjirkhqS8zLCMG74+q25V8afsm5n3TcVlk9VkyD6vvQ3i2zI3wtBk/Q+SNq/VRfY0ReZdagnUCco8ymqPzYXaUhdRioQ24tg4m712a3gcx988Pk/1pQ3ri058i25Pnc2m2fppsDPb6GMEVncjKYO/T/RGVL9cW6x8jQ+uU5B8md+aGiP8L+R+fhNq6h456WQAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingTop: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    marginBottom: 16,
  },
  task: {
    marginTop: 24,
    fontSize: 18,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  languageText: {
    fontSize: 18,
  },
  switch: {
    transform: [{scaleX: 1.2}, {scaleY: 1.2}], // Adjust size of the switch
  },
  flagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  flag: {
    fontSize: 30,
    marginRight: 10,
  },
  image: {
    width: 300,
    height: 500,
    marginTop: 20,
  },
});

export default memo(Lab1);
