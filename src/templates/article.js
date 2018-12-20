import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Hero from './hero'
import Img from 'gatsby-image'

class ArticleTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <article className="article">
        <h2 className="type--subtitle1">Sed congue, lectus</h2>
        <p className="type--body1">Sed congue, lectus at ullamcorper euismod, felis est sagittis justo, id mattis nulla mi non elit. Suspendisse dolor tortor, iaculis vel varius eu, tempus ut urna. Sed bibendum hendrerit placerat. Cras scelerisque interdum urna, ac posuere risus tincidunt eu. Vestibulum tincidunt mauris eu pulvinar ornare. Etiam pretium felis sapien, nec viverra justo mollis id. In pharetra tempus felis, eu aliquet sapien. Curabitur ac dignissim mi. Mauris sodales nec diam at feugiat. Praesent non nulla enim. Curabitur at mattis eros, nec tincidunt metus. Phasellus vel leo consequat, sollicitudin ipsum sed, suscipit quam. Pellentesque consequat nunc et sem ultrices, eget posuere dui tincidunt.</p>
        <p className="type--body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nisl iaculis nisl viverra vulputate. Nunc eleifend tempus felis. Sed et varius ex. In sodales sagittis lobortis. Morbi et elit in metus eleifend viverra et eget elit. Quisque et fermentum nisi, et accumsan velit. Proin nec lacus a diam tincidunt ullamcorper quis sed risus. Vestibulum volutpat, mauris sit amet fringilla tincidunt, lorem nisl sodales tortor, ac blandit ante lectus at augue.
        </p>
        <p className="type--body1">
        Cras turpis tellus, eleifend ac tincidunt ut, posuere vitae velit. Nulla fermentum, nisi ut tempus viverra, nisl orci hendrerit ante, sed iaculis lorem diam ac odio. Sed fermentum tristique bibendum. Mauris fermentum, turpis sed cursus ullamcorper, odio dui pellentesque arcu, in convallis turpis mauris eu ex. Fusce pellentesque consequat tortor, a cursus odio eleifend ut. Mauris iaculis, dui a hendrerit finibus, arcu orci ultrices purus, a placerat ex nisl eget arcu. Sed augue nisi, eleifend dignissim dolor vitae, interdum sodales felis. Curabitur eu scelerisque nunc. Aliquam viverra sem vel tellus vestibulum blandit. Donec purus neque, tincidunt in elementum et, consequat ornare ipsum. Donec condimentum, elit a commodo suscipit, velit ligula suscipit tortor, quis ultricies mi purus sit amet ipsum. Nunc sed euismod dolor. Nullam leo nibh, interdum id commodo ut, dapibus at dui.
        </p>
        <p className="type--body1">
        Quisque nec quam est. In in felis interdum, lacinia magna sit amet, porta tellus. Aliquam bibendum ultrices ipsum, nec venenatis eros ultricies vel. Vestibulum ac magna et sapien vehicula commodo. Integer sollicitudin dignissim leo, sed consectetur eros pulvinar a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sodales dictum justo, in tristique eros rutrum et. Vestibulum faucibus, lectus eu posuere accumsan, leo ex sollicitudin dolor, a posuere elit dolor et dui. Fusce congue faucibus elit, non volutpat metus cursus et. Quisque viverra mi nibh, sed laoreet turpis posuere quis. Suspendisse ullamcorper scelerisque orci, id fermentum quam pulvinar tempus. In hac habitasse platea dictumst.
        </p>
        <p className="type--body1">
        Quisque et enim eget magna congue fermentum. Ut nisl risus, luctus in porta in, volutpat vitae risus. Cras vel tempus risus. Curabitur malesuada suscipit tortor. Nunc tincidunt risus lectus, in malesuada eros convallis eu. Quisque sem tortor, ornare id justo quis, ullamcorper imperdiet ex. Duis commodo ante ut tortor volutpat, in vestibulum ligula congue. Nam sit amet metus nec urna ultrices ornare. Sed bibendum massa nec pretium egestas. Morbi in ipsum tincidunt, gravida massa molestie, fringilla lacus. Ut ut risus suscipit, gravida justo vel, gravida erat. Vestibulum at massa lectus. Nullam nec risus odio.
        </p>
        <p className="type--body1">
        Pellentesque auctor tristique risus in tempus. Curabitur semper dignissim viverra. Fusce porta sed justo ut pharetra. Nullam ornare porta ligula at dictum. Pellentesque dapibus augue id nisl lacinia, placerat tristique orci dictum. Maecenas lobortis fermentum luctus. Phasellus vestibulum quis dolor at condimentum.</p>
      </article>
    );
  }
}

export default ArticleTemplate